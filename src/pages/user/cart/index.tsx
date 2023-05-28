/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import Container from "@components/container";
import useClearCart from "@framework/api/cart/clear";
import useDeleteCartItem from "@framework/api/cart/delete";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, List, message, Popconfirm } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  const clearCartMutation = useClearCart();
  const delCartItemMutation = useDeleteCartItem();
  const { id } = useTelegramUser();
  const [openClearModal, setOpenClearModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];
  const handleDeleteCartItem = (product_id: string | number) => {
    delCartItemMutation.mutate(
      {
        user_id: `${id}`,
        product_id
      },
      {
        onSuccess: () => {
          message.success("حذف شد");
        },
        onError: () => {
          message.success("مشکلی رخ داده. دوباره تلاش کنید");
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
        },
        onError: () => {
          message.success("مشکلی رخ داده. دوباره تلاش کنید");
          setConfirmLoading(false);
        }
      }
    );
  };
  return (
    <Container title="لیست سفارشات" backwardUrl="/">
      <div className="flex flex-col gap-5">
        <div className=" rounded-lg bg-[var(--tg-theme-secondary-bg-color)] p-3 transition-all ">
          <List
            itemLayout="horizontal"
            dataSource={data}
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
                      <Link to="/products/product-1">{item.title}</Link>
                    </div>
                  }
                  description={
                    <div className="flex gap-3  ">
                      <div className="flex flex-row-reverse gap-2">
                        <span>تومان</span>
                        <span>120000</span>
                      </div>
                      <div>
                        <span>عدد</span>
                        <span>2</span>
                      </div>
                    </div>
                  }
                />

                <div>
                  <Popconfirm
                    placement="left"
                    title="حذف این محصول ؟"
                    onConfirm={() => handleDeleteCartItem(index)}
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
              disabled={confirmLoading}
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
            <p>assa</p>
          </div>
          <div>sdsd</div>
          <div>
            <Button disabled={confirmLoading} className="w-full" size="large">
              پرداخت
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
