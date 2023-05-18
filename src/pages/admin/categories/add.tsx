/* eslint-disable indent */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import useAddCategories from "@framework/api/categories/add";
import { useGetCategories } from "@framework/api/categories/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Cascader, Drawer, Form, Input, message } from "antd";
import React, { useEffect } from "react";

interface AddCategoryProps {
  onClose: (e?: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
}
interface Option {
  value: string | number;
  label: string | number;
  children?: Option[];
}

interface FromProps {
  name: string;
  categories: Array<Array<string | number>>;
  description?: string;
}
function CategoriesAdd({ onClose, isOpen }: AddCategoryProps) {
  const [form] = Form.useForm();
  const mutation = useAddCategories();
  const { id } = useTelegramUser();
  const { data, refetch, isLoading, isFetching } = useGetCategories();
  const isLoadCategories = isLoading || isFetching;
  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);
  const categoriesList: Option[] = data?.map(
    (item): Option => ({
      label: item.categories_Name,
      value: item.categories_Id,
      ...item.children
    })
  );
  return (
    <Drawer
      title="افزودن دسته بندی جدید"
      placement="right"
      width="100%"
      onClose={onClose}
      open={isOpen}>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        className="flex  h-full flex-col items-stretch justify-start"
        onFinish={({ name, categories }: FromProps) => {
          const parentId = categories?.length
            ? categories[categories.length - 1]
                .toLocaleString()
                .split(",")
                .at(-1)
            : 0;
          // console.log("params", name, parentId);
          mutation.mutate(
            {
              user_id: `${id}`,
              category_name: name,
              parent_id: parentId
            },
            {
              onSuccess: () => {
                message.success("دسته بندی شما با موفقیت ثبت شد");
                form.resetFields();
                onClose();
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
            options={categoriesList}
            multiple
            maxTagCount="responsive"
          />
        </Form.Item>
        {/*
        <Form.Item label="تخفیف (تومان) " name="quantity">
          <InputNumber className="w-full" type="number" />
        </Form.Item> */}

        <Button
          type="primary"
          disabled={isLoadCategories || mutation.isLoading}
          style={{ width: "100%" }}
          size="large"
          ghost
          className="mt-auto"
          htmlType="submit">
          ذخیره
        </Button>
      </Form>
    </Drawer>
  );
}

export default CategoriesAdd;
