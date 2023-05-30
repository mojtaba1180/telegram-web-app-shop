import Container from "@components/container";
import { useGetOrderById } from "@framework/api/orders/getById";
// eslint-disable-next-line object-curly-newline
import { Tabs } from "antd";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

import CustomerDetail from "./components/customer-detail";
import OrderList from "./components/order-list";
import OrderSetting from "./components/order-setting";

function AdminOrdersSingle() {
  const { order_id } = useParams<{ order_id: string }>();
  const location = useLocation();
  const { data, isFetching, isLoading, refetch } = useGetOrderById({
    order_Id: order_id
  });
  useEffect(() => {
    refetch();
  }, [location, refetch]);
  return (
    <Container title="سفارش :name" backwardUrl="/admin/orders">
      <Tabs
        items={[
          {
            label: "لیست سفارشات",
            key: "1",
            children: (
              <OrderList
                loading={isFetching || isLoading}
                orders={data?.order}
              />
            )
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
