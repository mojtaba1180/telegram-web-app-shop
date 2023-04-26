import Container from "@components/container";
// eslint-disable-next-line object-curly-newline
import { Tabs } from "antd";

import CustomerDetail from "./components/customer-detail";
import OrderList from "./components/order-list";
import OrderSetting from "./components/order-setting";

function AdminOrdersSingle() {
  return (
    <Container title="سفارش :name" backwardUrl="/admin/orders">
      <Tabs
        items={[
          {
            label: "لیست سفارشات",
            key: "1",
            children: <OrderList />
          },
          {
            label: "اطلاعات کاربر ",
            key: "3",
            children: <CustomerDetail />
          },
          {
            label: "تنظبمات سفارش",
            key: "2",
            children: <OrderSetting />
          }
        ]}
      />
    </Container>
  );
}

export default AdminOrdersSingle;
