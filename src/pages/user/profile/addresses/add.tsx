/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import Container from "@components/container";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

function AddAddress() {
  return (
    <Container title="افزودن ادرس جدید" backwardUrl={-1}>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item label="کشور" name="country" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="استان" name="state" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="شهر" name="city" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="خیابان (کوچه و جاده)"
          name="street"
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="کد پستی" name="zipcode" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            ghost
            size="large"
            className="w-full"
            htmlType="submit">
            افزودن ادرس
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default AddAddress;
