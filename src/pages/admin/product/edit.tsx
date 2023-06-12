/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import Container from "@components/container";
import Discount from "@components/discount";
import { useGetCategories } from "@framework/api/categories/get";
import useAddProductImage from "@framework/api/photos-upload/add";
import useDeleteProduct from "@framework/api/product/delete";
import { useGetProductsById } from "@framework/api/product/get-by-id";
import useUpdateProduct from "@framework/api/product/update";
import { TypeProductPost } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Spin,
  TreeSelect
} from "antd";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { useNavigate, useParams } from "react-router";

const { TextArea } = Input;
function Edit() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  // const [priceEnterd, setPriceEnterd] = useState<number>(0);
  const { product_id } = useParams();
  const {
    data: categoriesData,
    isLoading: isCatLoading,
    refetch: catRefetch,
    isFetching: isCatFetching
  } = useGetCategories({});
  const {
    data: productData,
    isLoading: isProductLoading,
    isFetching: isProductFetching,
    refetch: productRefetch
  } = useGetProductsById({ product_id });
  const mutation = useUpdateProduct({ product_id });
  const { id } = useTelegramUser();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const mutationUploadPhotos = useAddProductImage();
  const [imageLinkList, setImageLinkList] = useState<Array<string>>([]);
  const [images, setImages] = useState([]);
  const [hasDiscount, sethasDiscount] = useState<boolean>(false);

  const deleteMutation = useDeleteProduct();
  const onChangeImage = async (imageList) => {
    // data for submit
    imageList.length &&
      (await imageList.map(async (i: { data_url: string }) => {
        mutationUploadPhotos.mutate(
          { photo_base64: i.data_url.split(",")[1] },
          {
            onSuccess: (e) => {
              // console.log(`${import.meta.env.VITE_API_URL}/${e.data}`);
              // console.log("upload done");
              if (imageLinkList) {
                setImageLinkList([...imageLinkList, `${e.data}`]);
              } else {
                setImageLinkList([`${e.data}`]);
              }
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
  useEffect(() => {
    catRefetch();
    productRefetch();
  }, []);
  useEffect(() => {
    setComponentDisabled(isProductLoading || isProductFetching);
  }, [isProductLoading, isProductFetching]);

  useEffect(() => {
    if (!componentDisabled) {
      setImageLinkList(productData?.photos);
    }
  }, [componentDisabled]);
  // console.log(imageLinkList);
  const onChange = (value: any) => {
    // console.log(value);
  };
  const handleDeleteProduct = () => {
    deleteMutation.mutate(
      { product_id, user_id: id },
      {
        onSuccess: (e) => {
          message.success("محصول با موفقیت حذف شد ");
          navigate("/admin/products");
        },
        onError: () => {
          message.error(" مشکلی در حذف این محصول رخ داد. دوباره تلاش کنید");
        }
      }
    );
  };

  return (
    <Container backwardUrl="/admin/products" title="بروز رسانی محصول ">
      <Spin spinning={componentDisabled} tip="در حال بارگیری ...">
        {componentDisabled ? (
          <div className="h-screen" />
        ) : (
          <>
            <Form
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 20 }}
              layout="horizontal"
              initialValues={{
                description: productData?.description,
                product_name: productData?.product_Name,
                price: productData?.price,
                quantity: productData?.quantity,
                category_ids: productData?.categoryIds
              }}
              disabled={componentDisabled}
              onFinish={({
                category_ids,
                description,
                price,
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
                      message.success(" محصول شما با موفقیت اپدیت شد");
                      form.resetFields();
                      navigate("/admin/products");
                    },
                    onError: (err) => {
                      console.log(err);
                    }
                  }
                );
              }}>
              <Form.Item name="product_name" required label="نام محصول">
                <Input required />
              </Form.Item>
              <Form.Item name="category_ids" required label="دسته بندی">
                {/* <Cascader
                style={{ width: "100%" }}
                options={categoriesData}
                onChange={onChange}
                multiple={false}
                changeOnSelect
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

              <Form.Item label="قیمت (تومان) " required name="price">
                <InputNumber
                  required
                  // onChange={(e) => setPriceEnterd(e || productData?.price)}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="w-1/2"
                />
              </Form.Item>
              {/* <div className="-mt-4">
              {numberToWords(priceEnterd)} <b>تومان</b>
            </div> */}
              <Form.Item label="تعداد موجودی" required name="quantity">
                <InputNumber required type="number" className="w-1/2" />
              </Form.Item>

              <Form.Item label="توضیحات" required name="description">
                <TextArea rows={10} />
              </Form.Item>

              <Form.Item
                className="w-full"
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
                            <div key={index} className=" h-36 w-36 rounded-lg">
                              <img
                                src={`${import.meta.env.VITE_API_URL}/${image}`}
                                alt=""
                                className="h-full w-full rounded-lg "
                              />
                              <div className="mt-2 flex justify-between gap-3">
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

              <div className="flex gap-3">
                <Popconfirm
                  placement="top"
                  title="حذف این محصول ؟"
                  onConfirm={() => handleDeleteProduct()}
                  okText="حذف"
                  okType="default"
                  cancelText="انصراف">
                  <Button
                    size="large"
                    loading={deleteMutation.isLoading}
                    style={{ width: "36%" }}
                    danger>
                    حذف محصول
                  </Button>
                </Popconfirm>
                <Button
                  type="primary"
                  loading={mutation.isLoading}
                  style={{ width: "65%" }}
                  size="large"
                  ghost
                  // className="sticky bottom-3"
                  htmlType="submit">
                  ذخیره
                </Button>
              </div>
            </Form>
            <Discount
              data={productData?.discount}
              id={product_id}
              type="product"
            />
          </>
        )}
      </Spin>
    </Container>
  );
}

export default Edit;
