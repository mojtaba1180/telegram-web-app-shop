import { Order } from "@framework/types";
import { Button, Divider, Segmented } from "antd";

interface Props {
  orders: Order | undefined;
}

function OrderSetting({ orders }: Props) {
  return (
    <div>
      <Divider> تایین وضعیت سفارش</Divider>
      <Segmented options={["درحال انجام", "انجام شده", "درحال پرداخت"]} />
      <Button className=" mt-10 w-full " size="large" type="primary" ghost>
        ذخیره
      </Button>
    </div>
  );
}

export default OrderSetting;
