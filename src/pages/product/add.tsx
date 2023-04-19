import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Upload,
  UploadFile,
  UploadProps
} from "antd";
import { useRef, useState } from "react";

import Container from "@/components/container";
import { getFileBase64 } from "@/helpers/getFileBase64";

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

function Add() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
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
    console.log(newFileList);
    newFileList = newFileList.map((item) => {
      const imageBase64 = getFileBase64(item.originFileObj);
      imageBase64.then((res) => console.log(res));
      return {
        name: item.name,
        uid: item.uid,
        url: item.url,
        originFileObj: item.originFileObj
      };
    });
    setFileList(newFileList);
  };
  const uploadFileListProps = {
    accept: "image/*",
    onChange: handleOnChangeUploadFile,
    multiple: true,
    showUploadList: true,
    ref: uploadRef,
    listType: "picture-card"
  };
  return (
    <Container backwardUrl="/" title="افزودن محصول جدید">
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
          <InputNumber type="number" />
        </Form.Item>
        <Form.Item label="تخفیف (تومان) " name="quantity">
          <InputNumber type="number" />
        </Form.Item>
        <Form.Item label="تعداد موجودی " name="stock">
          <InputNumber type="number" />
        </Form.Item>
        <Form.Item label="توضیحات" name="description">
          <TextArea rows={4} />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
        <Form.Item
          className="w-full"
          name="images"
          label="عکس محصول"
          valuePropName="images">
          <Upload fileList={fileList} {...uploadFileListProps}>
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
