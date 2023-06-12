/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import Container from "@components/container";
import { useGetCategories } from "@framework/api/categories/get";
import useAddProductImage from "@framework/api/photos-upload/add";
import useAddProduct from "@framework/api/product/add";
import { TypeProductPost } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Spin,
  TreeSelect
} from "antd";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router";

const { TextArea } = Input;
function Add() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  // const [priceEnterd, setPriceEnterd] = useState<number>(0);

  const {
    data: categoriesData,
    isLoading: isCatLoading,
    refetch: catRefetch,
    isFetching: isCatFetching
  } = useGetCategories({});
  const mutation = useAddProduct();
  const mutationUploadPhotos = useAddProductImage();
  const { id } = useTelegramUser();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    catRefetch();
  }, []);

  const [imageLinkList, setImageLinkList] = useState<Array<string>>([]);
  const [images, setImages] = useState([]);
  const onChangeImage = async (imageList) => {
    // data for submit
    imageList.length &&
      (await imageList.map(async (i: { data_url: string }) => {
        mutationUploadPhotos.mutate(
          { photo_base64: i.data_url.split(",")[1] },
          {
            onSuccess: (e) => {
              setImageLinkList([...imageLinkList, `${e.data}`]);
            },
            onError: () => {
              message.error("افزودن عکس با مشکل مواجه شد");
            }
          }
        );
      }));
    setImages(imageList);
  };
  const handleRemoveSingleImage = (idx) => {
    const arr = [...imageLinkList];
    if (idx !== -1) {
      arr.splice(idx, 1);
      setImageLinkList(arr);
    }
  };

  return (
    <Container backwardUrl={-1} title="افزودن محصول جدید">
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        disabled={componentDisabled}
        onFinish={({
          category_ids,
          description,
          price,
          photos,
          product_name,
          quantity
        }: TypeProductPost) => {
          mutation.mutate(
            {
              category_ids:
                typeof category_ids === "number"
                  ? [category_ids]
                  : category_ids || [],
              description,
              photos: imageLinkList || [],
              price,
              product_name,
              quantity,
              user_id: id.toString()
            },
            {
              onSuccess: () => {
                message.success(" محصول شما با موفقیت ثبت شد");
                form.resetFields();
                navigate("/admin/products");
              },
              onError: (err) => {
                // console.log(err)
                message.error(err?.response?.data?.title);
              }
            }
          );
        }}>
        <Form.Item name="product_name" required label="نام محصول">
          <Input required />
        </Form.Item>
        <Form.Item name="category_ids" label="دسته بندی">
          {/* <Cascader
            style={{ width: "100%" }}
            options={categoriesData}
            multiple={false}
            changeOnSelect
            showSearch
            maxTagCount="responsive"
            loading={isCatLoading || isCatFetching}
            fieldNames={{
              label: "category_Name",
              value: "category_Id",
              children: "children"
            }}
          /> */}
          <TreeSelect
            showSearch
            showCheckedStrategy="SHOW_PARENT"
            treeData={categoriesData}
            loading={isCatLoading || isCatFetching}
            onChange={(e) => console.log(e)}
            treeLine
            style={{
              width: "100%"
            }}
            fieldNames={{
              label: "category_Name",
              value: "category_Id",
              key: "category_Id",
              children: "children"
            }}
          />
        </Form.Item>
        {/* <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item> */}
        <Form.Item label="قیمت (تومان) " required name="price">
          <InputNumber
            // onChange={(e) => setPriceEnterd(e || 0)}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            required
            className="w-1/2"
            // type="number"
          />
        </Form.Item>
        {/* <div className="-mt-4">
          {numberToWords(priceEnterd)} <b>تومان</b>
        </div> */}
        <Form.Item label="تعداد موجودی" required name="quantity">
          <InputNumber required type="number" className="w-1/2" />
        </Form.Item>
        {/* <Form.Item label="تعداد موجودی " name="stock">
          <InputNumber type="number" />
        </Form.Item> */}
        <Form.Item label="توضیحات" required name="description">
          <TextArea required rows={10} />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
        <Form.Item
          className="mb-14 w-full"
          name="photos"
          label="عکس محصول"
          valuePropName="photos">
          {mutationUploadPhotos.isLoading ? (
            <Spin spinning />
          ) : (
            <ImageUploading
              value={images}
              onChange={onChangeImage}
              maxNumber={4}
              dataURLKey="data_url">
              {({
                onImageUpload,
                onImageRemoveAll,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                // write your building UI
                <div className="upload__image-wrapper flex flex-col">
                  <div className="mb-5 flex h-[60px]  w-full">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      type="button"
                      className="h-full w-full border-[1px] border-dashed"
                      {...dragProps}>
                      افزودن عکس
                    </button>
                    &nbsp;
                    <button
                      className="h-full w-20 bg-red-600 "
                      type="button"
                      onClick={() => {
                        onImageRemoveAll();
                        setImageLinkList([]);
                      }}>
                      حذف همه
                    </button>
                  </div>
                  <div className="grid h-[240px] w-full grid-cols-2 grid-rows-2  gap-y-7 overflow-x-auto overflow-y-scroll  ">
                    {imageLinkList?.map((image, index) => (
                      <div key={index} className=" h-24 w-36 rounded-lg">
                        <img
                          src={`${import.meta.env.VITE_API_URL}/${image}`}
                          alt=""
                          className="h-full w-full rounded-lg "
                        />
                        <div className="flex justify-between gap-3">
                          <Button
                            danger
                            className="w-full"
                            htmlType="button"
                            onClick={() => {
                              handleRemoveSingleImage(index);
                              // onImageRemove(index)
                            }}>
                            حذف
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          )}
        </Form.Item>

        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          ghost
          loading={mutation.isLoading}
          // className="sticky bottom-3"
          htmlType="submit">
          ذخیره
        </Button>
      </Form>
    </Container>
  );
}

export default Add;
