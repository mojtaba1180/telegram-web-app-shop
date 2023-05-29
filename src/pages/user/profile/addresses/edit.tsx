/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import Container from "@components/container";
import { useGetAddresses } from "@framework/api/address/get";
import useUpdateAddress from "@framework/api/address/update";
import { TypeAddAddress } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Form, Input, message, Spin } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

function EditAddress() {
  const navigate = useNavigate();
  const { address_id } = useParams();
  const mutation = useUpdateAddress();
  const { id } = useTelegramUser();
  const { data, isFetching, refetch, isLoading } = useGetAddresses(
    id,
    address_id
  );
  const address = data?.addresses[0];
  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location]);

  const componentDisable = isFetching || isLoading;
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
        user_Id: `${id}`,
        address_Id: address_id
      },
      {
        onSuccess: () => {
          message.success("آدرس شما با موفقیت ثبت شد");
          navigate(-1);
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
      <Spin spinning={componentDisable} tip="در حال بارگیری ...">
        {componentDisable ? (
          <div className="h-[500px]" />
        ) : (
          <Form
            disabled={mutation.isLoading}
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{
              city: address?.city,
              country: address?.country,
              state: address?.state,
              street: address?.street,
              zipcode: address?.zipcode
            }}
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
                ویرایش آدرس
              </Button>
            </Form.Item>
          </Form>
        )}
      </Spin>
    </Container>
  );
}

export default EditAddress;
