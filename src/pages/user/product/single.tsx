/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Container from "@components/container";
import UserSingleProductSkeleton from "@components/skeleton/user-single-product";
import useAddToCart from "@framework/api/cart/add";
import { useGetProductsById } from "@framework/api/product/get-by-id";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Carousel, InputNumber, Tabs, message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductSingle() {
  const [count, setcount] = useState(1);
  const { product_id } = useParams();
  const mutation = useAddToCart();
  const { id } = useTelegramUser();
  const { data, isLoading, refetch, isFetching } = useGetProductsById({
    product_id: product_id || 0
  });
  // const [cartItems, setCartItems] = useAtom(userCartItems);
  useEffect(() => {
    refetch();
  }, []);

  const onChange = (key: string) => {
    console.log(key);
  };

  const handleAddToCart = () => {
    mutation.mutate(
      {
        user_id: `${id}`,
        cart_items: [
          {
            product_id: parseInt(product_id),
            quantity: count
          }
        ]
      },
      {
        onSuccess: () => {
          message.success("محصول شما به سبد اضافه شد ");
        }
      }
    );
  };

  const decriment = () => count > 1 && setcount(count - 1);
  const incriment = () => count < 100 && setcount(count + 1);

  return (
    <Container title="نام محصول" backwardUrl={-1}>
      {isFetching || isLoading ? (
        <UserSingleProductSkeleton />
      ) : (
        <div className="flex flex-col">
          <div className=" flex h-[170px] w-full items-center justify-center ">
            <Carousel className="h-full w-full" rootClassName="w-full h-full">
              {data?.photos?.map((img) => (
                // <div
                //   className="bg-conver h-full w-full"
                //   style={{ backgroundImage: `url("${img}")` }}
                // />
                <img
                  src={img}
                  alt={data?.product_Name}
                  className="h-full w-full"
                />
              ))}
            </Carousel>
          </div>
          <div className=" my-6 text-right">{data?.product_Name}</div>
          <div className="flex w-full justify-between">
            <div className="flex w-44 items-center justify-center gap-2">
              <Button
                htmlType="button"
                type="primary"
                ghost
                className="flex h-full w-10 items-center justify-center rounded-l-lg bg-gray-300"
                onClick={incriment}>
                <PlusOutlined />
              </Button>
              <InputNumber
                controls={false}
                className="text-center"
                type="number"
                max={100}
                maxLength={2}
                onChange={(e) => {
                  if (e > 1 || e < 100) {
                    setcount(e);
                  }
                }}
                defaultValue={count}
                value={count}
              />
              <Button
                htmlType="button"
                type="primary"
                ghost
                className="flex h-full w-10 items-center justify-center rounded-r-lg bg-gray-300"
                onClick={decriment}>
                <MinusOutlined />
              </Button>
            </div>
            <div>قیمت : 1200000 تومان</div>
          </div>
          <div className="my-4">
            <Button
              className="w-full"
              onClick={handleAddToCart}
              size="large"
              type="primary"
              ghost>
              افزودن به سبد
            </Button>
          </div>
          <div>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: "1",
                  label: "معرفی",
                  children: (
                    <p
                      style={{ whiteSpace: "pre-line" }}
                      className="text-right">
                      {data?.description}
                    </p>
                  )
                }
              ]}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </Container>
  );
}
export default ProductSingle;
