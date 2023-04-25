// eslint-disable-next-line object-curly-newline
import { Button, Cascader, Drawer, Form, Input, InputNumber } from "antd";
import React from "react";

interface AddCategoryProps {
  onClose: (e?: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
}
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    label: "Light",
    value: "34324234234",
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index }))
  },
  {
    label: "Bamboo",
    value: "2343424234234",
    children: [
      {
        label: "Little",
        value: "3244324234234",
        children: [
          {
            label: "Toy Fish",
            value: "234324324"
          },
          {
            label: "Toy Cards",
            value: "234324324234"
          },
          {
            label: "Toy Bird",
            value: "23432432423423"
          }
        ]
      }
    ]
  }
];
function CategoriesAdd({ onClose, isOpen }: AddCategoryProps) {
  const [form] = Form.useForm();

  const onChange = (value: any) => {
    console.log(value);
  };

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
        onFinish={(e) => {
          console.log(e);
          form.resetFields();
          onClose();
        }}>
        <Form.Item name="name" required label="نام">
          <Input required />
        </Form.Item>

        <Form.Item name="categories" label=" دسته بندی پدر یا زیر مجموعه">
          <Cascader
            style={{ width: "100%" }}
            options={options}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
          />
        </Form.Item>

        <Form.Item label="تخفیف (تومان) " name="quantity">
          <InputNumber className="w-full" type="number" />
        </Form.Item>

        <Button
          type="primary"
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
