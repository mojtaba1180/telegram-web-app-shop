import useAddDiscounts from "@framework/api/discount/add";
import useDeleteDiscount from "@framework/api/discount/delete";
import useUpdateDiscount from "@framework/api/discount/update";
import { TypeDiscount } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import {
  Alert,
  Button,
  Divider,
  Form,
  InputNumber,
  message,
  Popconfirm
} from "antd";
import { DatePicker, useJalaliLocaleListener } from "antd-jalali";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import moment from "jalali-moment";
import { useState } from "react";

interface Props {
  type: "product" | "category";
  id: string;
  data: TypeDiscount | null;
}

function Discount({ type, id, data }: Props) {
  const { id: userId } = useTelegramUser();
  const mutation = useAddDiscounts();
  const updateMutation = useUpdateDiscount({
    discount_id: data?.discount_Id || ""
  });
  const deleteMutation = useDeleteDiscount();
  const [checked, setChecked] = useState<boolean>(false);
  const disabledDate: RangePickerProps["disabledDate"] = (current) =>
    // Can not select days before today and today
    current && current < dayjs().endOf("day");
  useJalaliLocaleListener();
  // dayjs.calendar("jalali");

  const handleDeleteDiscount = () => {
    deleteMutation.mutate(
      {
        discount_id: data?.discount_Id,
        user_id: userId.toString()
      },
      {
        onSuccess: () => {
          message.success("تخفیف شما حذف شد ");
          window.location.reload();
        },
        onError: () => {
          message.error("حذف تخفیف با مشکل مواجه شد");
        }
      }
    );
  };

  return (
    <div>
      <Divider> تخفیفات </Divider>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        initialValues={{
          percent: data?.discount_Value,
          discount_start_date: data ? dayjs(data?.discount_Start_Date) : null,
          discount_end_date: data ? dayjs(data?.discount_End_Date) : null
        }}
        layout="horizontal"
        className="flex w-full flex-col justify-center gap-4"
        onFinish={({ percent, discount_start_date, discount_end_date }) => {
          const values = {
            category_id: type === "category" ? parseInt(id, 10) : null,
            product_id: type === "product" ? parseInt(id, 10) : null,
            discount_type: "percent",
            discount_value: percent,
            discount_start_date: moment(discount_start_date.$d).format() || "",
            discount_end_date: moment(discount_end_date.$d).format() || "",
            user_id: userId.toString()
          };
          if (data) {
            updateMutation.mutate(values, {
              onSuccess: () => {
                message.success("تخفیف شما ثبت شد ");
                // window.location.reload();
              },
              onError: () => {
                message.error("ثبت تخفیف با مشکل مواجه شد");
              }
            });
          } else {
            mutation.mutate(values, {
              onSuccess: () => {
                message.success("تخفیف شما ثبت شد ");
                // window.location.reload();
              },
              onError: () => {
                message.error("ثبت تخفیف با مشکل مواجه شد");
              }
            });
          }
        }}>
        <Alert
          type="info"
          message="تخفیفات بین 1 تا 100 درصد اعمال میشود "
          showIcon
        />
        <Form.Item name="percent" required label="درصد">
          <InputNumber min={1} addonAfter="%" max={100} required />
        </Form.Item>

        <Form.Item name="discount_start_date" required label="از شروع">
          <DatePicker />
        </Form.Item>
        <Form.Item name="discount_end_date" required label="تا پایان">
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>

        <div className="flex gap-3">
          {data && (
            <Popconfirm
              placement="top"
              title="آیا از حذف تخفیف اطمینان دارید ؟"
              onConfirm={() => handleDeleteDiscount()}
              okText="حذف"
              okType="default"
              cancelText="انصراف">
              <Button
                size="large"
                loading={deleteMutation.isLoading}
                style={{ width: "36%" }}
                danger>
                حذف تخفیف
              </Button>
            </Popconfirm>
          )}
          <Button
            type="primary"
            loading={mutation.isLoading}
            style={{ width: data ? "65%" : "100%" }}
            size="large"
            ghost
            // className="sticky bottom-3"
            htmlType="submit">
            ذخیره
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Discount;
