/* eslint-disable camelcase */
import { PlusOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { useGetCategories } from "@framework/api/categories/get";
import useAddProduct from "@framework/api/product/add";
import { TypeProductPost } from "@framework/types";
import { getFileBase64 } from "@helpers/getFileBase64";
import useTelegramUser from "@hooks/useTelegramUser";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  message,
  Upload,
  UploadFile,
  UploadProps
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const { TextArea } = Input;
function Add() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const {
    data: categoriesData,
    isLoading: isCatLoading,
    refetch: catRefetch,
    isFetching: isCatFetching
  } = useGetCategories();
  const mutation = useAddProduct();
  const { id } = useTelegramUser();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    catRefetch();
  }, []);

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

  const handleOnChangeUploadFile: UploadProps["onChange"] = (e) => {
    let newFileList: UploadFile[] = [...e.fileList];
    // console.log(newFileList);
    newFileList = newFileList.map((item) => {
      const imageBase64 = getFileBase64(item.originFileObj);
      imageBase64.then((res) => console.log(res));
      // console.log(item.originFileObj);
      return {
        name: item.name,
        uid: item.uid,
        url: item.url,
        originFileObj: item.originFileObj
      };
    });
    setFileList(newFileList);
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
          console.log(photos);
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
                message.success(" محصول شما با موفقیت ثبت شد");
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
            required
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
            onChange={handleOnChangeUploadFile}
            multiple
            showUploadList
            beforeUpload={(e) => {
              // const reader = new FileReader();
              // reader.onload = (z) => {
              //   console.log(z?.target.result);
              // };
              // console.log(reader.readAsText({ e }));
              // return false;
            }}
            // customRequest={async (e) => {
            //   // const file = await file2Base64(e.file);
            //   console.log(e);
            // }}
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
    </Container>
  );
}

export default Add;
