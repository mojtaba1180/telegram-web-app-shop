/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import Container from "@components/container";
import useClearCart from "@framework/api/cart/clear";
import useDeleteCartItem from "@framework/api/cart/delete";
import { useGetCarts } from "@framework/api/cart/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { addCommas } from "@persian-tools/persian-tools";
import { Button, List, message, Popconfirm } from "antd";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const clearCartMutation = useClearCart();
  const delCartItemMutation = useDeleteCartItem();
  const { id } = useTelegramUser();
  const { data, isFetching, isLoading, refetch } = useGetCarts(id);
  const [openClearModal, setOpenClearModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    refetch();
  }, [location, refetch]);

  const handleDeleteCartItem = (product_id: string | number) => {
    setConfirmLoading(true);

    delCartItemMutation.mutate(
      {
        user_id: `${id}`,
        product_id
      },
      {
        onSuccess: () => {
          message.success("حذف شد");
          setConfirmLoading(false);
          refetch();
        },
        onError: () => {
          message.error("مشکلی رخ داده. دوباره تلاش کنید");
          setConfirmLoading(false);
          refetch();
        }
      }
    );
  };
  const handleClearCart = () => {
    setConfirmLoading(true);
    clearCartMutation.mutate(
      {
        user_id: `${id}`
      },
      {
        onSuccess: () => {
          message.success("سبد شما خالی شد ");
          setConfirmLoading(false);
          setOpenClearModal(false);
          refetch();
        },
        onError: () => {
          message.error("مشکلی رخ داده. دوباره تلاش کنید");
          setConfirmLoading(false);
          setOpenClearModal(false);
          refetch();
        }
      }
    );
  };
  return (
    <Container title="سبد خرید" backwardUrl="/">
      <div className="flex flex-col gap-5">
        <div className=" rounded-lg bg-[var(--tg-theme-secondary-bg-color)] p-3 transition-all ">
          <List
            loading={isLoading || isFetching}
            itemLayout="horizontal"
            dataSource={data?.cartItems}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  // avatar={
                  //   <Avatar
                  //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  //   />
                  // }
                  title={
                    <div className="w-full text-start">
                      <Link to={`/products/${item.product_Id}`}>
                        {item.product_Name}
                      </Link>
                    </div>
                  }
                  description={
                    <div className="flex flex-col gap-3  ">
                      <div className="flex flex-row gap-1">
                        <span>تومان</span>
                        <span>{addCommas(item.discountedPrice)}</span>
                        <span>: قیمت واحد</span>
                      </div>
                      <div className="flex gap-1">
                        <span>عدد</span>
                        <span>{item.quantity}</span>
                        <span>: تعداد</span>
                      </div>

                      <div className="flex flex-row gap-1">
                        <span>تومان</span>
                        <span>
                          {addCommas(item.discountedPrice * item.quantity)}
                        </span>
                        <span>: قیمت کل</span>
                      </div>
                    </div>
                  }
                />

                <div>
                  <Popconfirm
                    placement="left"
                    title="حذف این محصول ؟"
                    onConfirm={() => handleDeleteCartItem(item.product_Id)}
                    okText="حذف"
                    okType="default"
                    cancelText="انصراف">
                    <Button disabled={confirmLoading} size="small">
                      حذف
                    </Button>
                  </Popconfirm>
                </div>
              </List.Item>
            )}
          />
          <Popconfirm
            title="توجه"
            description="آیا از حذف کردن تمام سفارشات خود اطمینان دارید ؟"
            open={openClearModal}
            onConfirm={handleClearCart}
            okButtonProps={{ loading: confirmLoading }}
            cancelButtonProps={{ disabled: confirmLoading }}
            okType="default"
            okText={confirmLoading ? "درحال حذف" : "تایید"}
            cancelText="انصراف"
            onCancel={() => setOpenClearModal(false)}>
            <Button
              disabled={confirmLoading || data?.cartItems.length === 0}
              onClick={() => setOpenClearModal(true)}
              className="!w-full"
              style={{ width: "100%" }}
              size="large">
              حذف همه
            </Button>
          </Popconfirm>
        </div>
        <div className="flex flex-col gap-5  rounded-lg bg-[var(--tg-theme-secondary-bg-color)] p-3 transition-all">
          <div>
            <p className="flex w-full flex-row-reverse items-center justify-center gap-2">
              <span>قیمت کل </span>
              <span>{addCommas(data?.totalPrice)}</span>
              <span>تومان</span>
            </p>
          </div>

          <div>
            <Button
              onClick={() =>
                navigator("/checkout", {
                  state: {
                    cart_id: data?.cart_Id
                  }
                })
              }
              disabled={confirmLoading || data?.cartItems.length === 0}
              className="w-full"
              size="large">
              نهایی کردن خرید
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
