import Container from "@components/container";
// eslint-disable-next-line object-curly-newline
import { Tabs } from "antd";

import CustomerDetail from "./components/customer-detail";
import OrderList from "./components/order-list";

function AdminOrdersSingle() {
  return (
    <Container title="سفارش :name" backwardUrl={-1}>
      <div className="mb-16">
        <Tabs
          items={[
            {
              label: "مشخصات سفارشات",
              key: "1",
              children: <OrderList />
            },
            {
              label: "آدرس صورت حساب ",
              key: "3",
              children: <CustomerDetail />
            }
            // {
            //   label: "تنظبمات سفارش",
            //   key: "2",
            //   children: <OrderSetting />
            // }
          ]}
        />
      </div>
    </Container>
  );
}

export default AdminOrdersSingle;
