/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */

import { InfoCircleOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { useGetBotSetting } from "@framework/api/bot-setting/get";
import useUpdateBotSetting from "@framework/api/bot-setting/update";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Divider, Form, List, message, Popover, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";

function BotSetting() {
  const mutation = useUpdateBotSetting();
  const { id } = useTelegramUser();
  const { data, isFetching, isLoading, refetch } = useGetBotSetting();
  const loading = isFetching || isLoading;
  return (
    <Container backwardUrl={-1} title="تنظیمات ربات">
      <Spin spinning={loading}>
        {loading ? (
          <div className="h-[300px] w-full" />
        ) : (
          <>
            <Form
              disabled={mutation.isLoading}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 20 }}
              layout="horizontal"
              initialValues={{
                welcome_message: data?.welcome_message,
                about_us: data?.about_us,
                contact_us: data?.contact_us
              }}
              onFinish={(props) => {
                mutation.mutate(
                  {
                    ...props,
                    user_id: id.toString()
                  },
                  {
                    onSuccess: () => {
                      message.success("تنظیمات با موفقیت ثبت شد.");
                      refetch();
                    },
                    onError: () => {
                      message.error(
                        "ثبت با مشکل مواجه شد دقایقی دیگر تلاش کنید"
                      );
                      refetch();
                    }
                  }
                );
              }}>
              <Form.Item label="پیام خوش آمد " required name="welcome_message">
                <TextArea required rows={7} />
              </Form.Item>
              <Form.Item label="درباره ما" required name="about_us">
                <TextArea
                  required
                  rows={7}
                  className="!resize"
                  contentEditable
                />
              </Form.Item>
              <Form.Item label="تماس با ما" required name="contact_us">
                <TextArea required rows={7} />
              </Form.Item>

              <Button
                type="primary"
                style={{ width: "100%" }}
                size="large"
                ghost
                loading={mutation.isLoading}
                // className="sticky bottom-3"
                htmlType="submit">
                ذخیره
              </Button>
            </Form>
            <Divider>
              <div className="flex gap-2">
                <Popover
                  content={<span>قابل تغییر نمیباشد</span>}
                  title="Title"
                  trigger="click">
                  <InfoCircleOutlined />
                </Popover>
                اطلاعات تکمیلی
              </div>
            </Divider>
            <div>
              <List className="w-full" bordered>
                <List.Item>
                  <List.Item.Meta
                    title="نام :"
                    description={data?.owner_last_name || "ندارد"}
                  />
                </List.Item>

                <List.Item>
                  <List.Item.Meta
                    title="نام فروشگاه:"
                    description={data?.shop_name || "ندارد"}
                  />
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    title="bot-username:"
                    description={`${data?.bot_username || ""}`}
                  />
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    title="شماره تماس admin :"
                    description={data?.owner_phone_number || "ندارد"}
                  />
                </List.Item>
              </List>
            </div>
          </>
        )}
      </Spin>
    </Container>
  );
}
export default BotSetting;
