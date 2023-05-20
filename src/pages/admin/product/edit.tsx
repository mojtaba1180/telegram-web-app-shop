/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { PlusOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { useGetCategories } from "@framework/api/categories/get";
import { useGetProductsById } from "@framework/api/product/get-by-id";
import useUpdateProduct from "@framework/api/product/update";
import { TypeProductPost } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  message,
  Spin,
  Upload,
  UploadFile
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";

const { TextArea } = Input;
function Edit() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const { product_id } = useParams();
  const {
    data: categoriesData,
    isLoading: isCatLoading,
    refetch: catRefetch,
    isFetching: isCatFetching
  } = useGetCategories();
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

  useEffect(() => {
    catRefetch();
    productRefetch();
  }, []);
  useEffect(() => {
    setComponentDisabled(isProductLoading || isProductFetching);
  }, [isProductLoading, isProductFetching]);

  const onChange = (value: any) => {
    console.log(value);
  };
  const uploadRef = useRef(null);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "123",
      name: "xxx.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]);
  return (
    <Container backwardUrl="/admin/products" title="بروز رسانی محصول ">
      <Spin spinning={componentDisabled} tip="در حال بارگیری ...">
        {componentDisabled ? (
          <div className="h-screen" />
        ) : (
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
                  category_ids: category_ids.flat(),
                  description,
                  photos: [],
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
              <Cascader
                style={{ width: "100%" }}
                options={categoriesData}
                onChange={onChange}
                multiple
                maxTagCount="responsive"
                loading={isCatLoading || isCatFetching}
                fieldNames={{
                  label: "category_Name",
                  value: "category_Id",
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
              <InputNumber required type="number" />
            </Form.Item>
            <Form.Item label="تعداد موجودی" required name="quantity">
              <InputNumber required type="number" />
            </Form.Item>
            {/* <Form.Item label="تعداد موجودی " name="stock">
          <InputNumber type="number" />
        </Form.Item> */}
            <Form.Item label="توضیحات" required name="description">
              <TextArea rows={4} />
            </Form.Item>
            {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
            <Form.Item
              className="w-full"
              name="photos"
              label="عکس محصول"
              valuePropName="photos">
              <Upload
                fileList={fileList}
                accept="image/*"
                // onChange={handleOnChangeUploadFile}
                multiple
                showUploadList
                ref={uploadRef}
                listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>افزودن</div>
                </div>
              </Upload>
            </Form.Item>

            <Button
              type="primary"
              style={{ width: "100%" }}
              size="large"
              ghost
              // className="sticky bottom-3"
              htmlType="submit">
              ذخیره
            </Button>
          </Form>
        )}
      </Spin>
    </Container>
  );
}

export default Edit;
