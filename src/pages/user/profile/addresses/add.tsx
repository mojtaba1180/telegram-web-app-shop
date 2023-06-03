/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import Container from "@components/container";
import useAddAddress from "@framework/api/address/add";
import { TypeAddAddress } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";

function AddAddress() {
  const navigate = useNavigate();
  const mutation = useAddAddress();
  const { id } = useTelegramUser();
  const onFinish = ({
    city,
    country,
    state,
    street,
    user_id,
    zipcode
  }: TypeAddAddress) => {
    mutation.mutate(
      {
        city,
        country,
        state,
        street,
        user_id,
        zipcode,
        user_Id: `${id}`
      },
      {
        onSuccess: () => {
          message.success("آدرس شما با موفقیت ثبت شد");
          setTimeout(() => navigate(-1), 1000);
        },
        onError: () => {
          message.error("مشکلی رخ داده است لطفا دوباره تلاش کنید");
        }
      }
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container title="افزودن ادرس جدید" backwardUrl={-1}>
      <Form
        disabled={mutation.isLoading}
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="کشور"
          name="country"
          rules={[{ required: true, message: "لطفا کشور را وارد کنید" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="استان"
          name="state"
          rules={[{ required: true, message: "" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="شهر"
          name="city"
          rules={[{ required: true, message: "لطفا شهر وارد کنید " }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="خیابان (کوچه و جاده)"
          name="street"
          rules={[{ required: true, message: "لطفا خیابان وارد کنید " }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="کد پستی"
          name="zipcode"
          rules={[{ required: true, message: "لطفا کدپستی وارد کنید " }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            loading={mutation.isLoading}
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
