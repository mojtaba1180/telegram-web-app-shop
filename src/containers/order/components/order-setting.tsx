/* eslint-disable camelcase */
import useUpdateOrder from "@framework/api/orders/update";
import { Order } from "@framework/types";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Divider, Input, message, Radio } from "antd";
import { useState } from "react";

interface Props {
  orders: Order | undefined;
}

function OrderSetting({ orders }: Props) {
  const mutation = useUpdateOrder({ order_id: orders?.order_Id });
  const [status, setStatus] = useState(orders?.order_Status);
  const [tracking_Code, setTracking_Code] = useState(orders?.tracking_Code);
  const { id } = useTelegramUser();
  const onChange = (e) => {
    setStatus(e.target.value);
  };
  const handleSubmitStatus = () => {
    mutation.mutate(
      {
        order_Status: status,
        tracking_Code: tracking_Code || "",
        user_Id: id.toString()
      },
      {
        onSuccess: () => {
          message.success("وضعیت تغییر یافت");
        },
        onError: () => {
          message.error("مشکلی رخ داده");
        }
      }
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <Divider> تعیین وضعیت سفارش</Divider>
      <Radio.Group onChange={onChange} defaultValue={status} value={status}>
        <Radio.Button value="Pending"> در انتظار تایید </Radio.Button>
        <Radio.Button value="Processing"> درحال انجام </Radio.Button>
        <Radio.Button value="Packing"> درحال بسته بندی </Radio.Button>
        <Radio.Button value="CancelledByCustomer">لغو توسط مشتری</Radio.Button>
        <Radio.Button value="CancelledDueToUnavailability">
          اتمام موجودی 1 یا چند کالا
        </Radio.Button>
        <Radio.Button value="CancelledByAdmin"> لغو توسط ادمین </Radio.Button>
        <Radio.Button value="Shipped"> تحویل داده شده </Radio.Button>
      </Radio.Group>

      <div className="flex flex-col ">
        <div className="text-right">کد رهگیری :</div>
        <Input
          onChange={(e) => {
            setTracking_Code(e.target.value);
          }}
          value={tracking_Code}
        />
      </div>
      <Button
        loading={mutation.isLoading}
        onClick={handleSubmitStatus}
        className=" mt-10 w-full "
        size="large"
        type="primary"
        ghost>
        ذخیره
      </Button>
    </div>
  );
}

export default OrderSetting;
