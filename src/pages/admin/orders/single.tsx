import Container from "@components/container";
import { useGetOrderById } from "@framework/api/orders/getById";
// eslint-disable-next-line object-curly-newline
import { Tabs } from "antd";

import CustomerDetail from "./components/customer-detail";
import OrderList from "./components/order-list";
import OrderSetting from "./components/order-setting";

function AdminOrdersSingle() {
  const { data, isLoading } = useGetOrderById({ order_Id: "1" });
  const order = data?.order;
  return (
    <Container title="سفارش :name" backwardUrl="/admin/orders">
      <Tabs
        items={[
          {
            label: "لیست سفارشات",
            key: "1",
            children: <OrderList order={order} isLoading={isLoading} />
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
