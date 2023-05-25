/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import Container from "@components/container";
import useAddCategories from "@framework/api/categories/add";
import { useGetCategories } from "@framework/api/categories/get";
import { TypeCategories } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Cascader, Form, Input, message, Spin } from "antd";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

interface FromProps {
  name: string;
  description?: string;
}

function CategoriesEdit() {
  const { parentId } = useParams();
  const location = useLocation();
  const [form] = Form.useForm();
  const mutation = useAddCategories();
  const { id } = useTelegramUser();
  const [thisCat, setThisCat] = useState<TypeCategories>({});
  const { data, isLoading, isFetching } = useGetCategories();
  const isLoadCategories = isLoading || isFetching;
  const navigate = useNavigate();
  const removeChildren = (categories: TypeCategories[]): TypeCategories[] =>
    categories?.map((cat) => {
      if (
        cat.children &&
        cat.children.length > 0 &&
        cat.category_Id === parseInt(parentId, 10)
      ) {
        // If category_Id matches parent_Id, remove the children
        return {
          ...cat,
          disabled: true
        };
      }
      if (cat.children && cat.children.length > 0) {
        // Recursively remove children for child categories
        return {
          ...cat,
          children: removeChildren(cat.children)
        };
      }
      return cat;
    });
  console.log(location);
  return (
    <Container title="ویرایش دسته بندی " backwardUrl={-1}>
      <Spin spinning={isLoadCategories} tip="در حال بارگیری ...">
        {isLoadCategories ? (
          <div className="h-screen" />
        ) : (
          <Form
            form={form}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            initialValues={{
              name: location.state.category_Name
              // categories: location.state.category_Id
            }}
            className="flex  h-full flex-col items-stretch justify-start"
            onFinish={({ name }: FromProps) => {
              // console.log("params", name, parentId);
              mutation.mutate(
                {
                  user_id: `${id}`,
                  category_name: name,
                  parent_id: (parentId && parseInt(parentId)) || null
                },
                {
                  onSuccess: () => {
                    message.success("دسته بندی شما با موفقیت ثبت شد");
                    form.resetFields();
                    navigate("/admin/categories");
                  },
                  onError: (err) => {
                    console.log(err);
                  }
                }
              );
            }}>
            <Form.Item name="name" required label="نام">
              <Input required />
            </Form.Item>

            {/* <Form.Item name="description" label="توضیحات">
          <Input.TextArea />
        </Form.Item> */}

            <Form.Item name="categories" label=" دسته بندی پدر یا زیر مجموعه">
              <Cascader
                loading={isLoadCategories}
                disabled={isLoadCategories}
                style={{ width: "100%" }}
                onChange={(e) => console.log(e)}
                options={removeChildren(data)}
                fieldNames={{
                  label: "category_Name",
                  value: "category_Id",
                  children: "children"
                }}
                multiple={false}
                changeOnSelect
                maxTagCount="responsive"
              />
            </Form.Item>

            {/*
        <Form.Item label="تخفیف (تومان) " name="quantity">
        <InputNumber className="w-full" type="number" />
      </Form.Item> */}

            <Button
              type="primary"
              disabled={mutation.isLoading}
              style={{ width: "100%" }}
              size="large"
              ghost
              className="mt-auto"
              htmlType="submit">
              ذخیره
            </Button>
          </Form>
        )}
      </Spin>
    </Container>
  );
}

export default CategoriesEdit;
