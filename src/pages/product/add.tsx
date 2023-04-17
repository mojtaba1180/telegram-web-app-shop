import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Upload,
  UploadProps
} from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    label: "Light",
    value: "light",
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index }))
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish"
          },
          {
            label: "Toy Cards",
            value: "cards"
          },
          {
            label: "Toy Bird",
            value: "bird"
          }
        ]
      }
    ]
  }
];

const UploadImageProps: UploadProps = {
  beforeUpload: (file) => {
    console.log(file.type);

    const isPNG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isPNG) {
      message.error(`${file.name} لصفا عکس اپلود کنید`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  }
};

function Add() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onChange = (value: any) => {
    console.log(value);
  };
  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 20 }}
      layout="horizontal"
      disabled={componentDisabled}
      onFinish={(e) => console.log(e)}>
      <Form.Item name="name" label="نام محصول">
        <Input />
      </Form.Item>
      {/* <Form.Item name="type" label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item> */}
      {/* <Form.Item name="treeSelect" label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }]
            }
          ]}
        />
      </Form.Item> */}
      <Form.Item name="categories" label="دسته بندی">
        <Cascader
          style={{ width: "100%" }}
          options={options}
          onChange={onChange}
          multiple
          maxTagCount="responsive"
        />
      </Form.Item>
      {/* <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item> */}
      <Form.Item label="قیمت (تومان) " name="price">
        <InputNumber />
      </Form.Item>
      <Form.Item label="تعداد موجودی " name="stock">
        <InputNumber />
      </Form.Item>
      <Form.Item label="توضیحات" name="description">
        <TextArea rows={4} />
      </Form.Item>
      {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      <Form.Item name="images" label="عکس محصول" valuePropName="images">
        <Upload {...UploadImageProps} multiple listType="picture-card">
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
        htmlType="submit">
        {" "}
        ذخیره
      </Button>
    </Form>
  );
}

export default Add;
