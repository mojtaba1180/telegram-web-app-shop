import Container from "@components/container";
import { Button, InputNumber, Tabs, TabsProps } from "antd";
import { useState } from "react";

function ProductSingle() {
  const [count, setcount] = useState(1);
  const onChange = (key: string) => {
    console.log(key);
  };

  const decriment = () => count > 1 && setcount(count - 1);
  const incriment = () => count < 100 && setcount(count + 1);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "معرفی",
      children: "Content of Tab Pane 1"
    },
    {
      key: "2",
      label: "مشخصات",
      children: "Content of Tab Pane 2"
    }
  ];
  return (
    <Container title="نام محصول" backwardUrl={-1}>
      <div className="flex flex-col">
        <div className=" flex h-[270px] w-full items-center justify-center  bg-[var(--tg-theme-secondary-bg-color)]">
          image
        </div>
        <div className=" my-6 text-right">
          title
          {count}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-28 items-center justify-center">
            <button
              type="button"
              className="h-full w-10 rounded-l-lg bg-gray-300"
              onClick={incriment}>
              +
            </button>
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
            <button
              type="button"
              className="h-full w-10 rounded-r-lg bg-gray-300"
              onClick={decriment}>
              -
            </button>
          </div>
          <div>قیمت : 1200000 تومان</div>
        </div>
        <div className="my-4">
          <Button className="w-full" size="large" type="primary" ghost>
            افزودن به سبد
          </Button>
        </div>
        <div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </Container>
  );
}
export default ProductSingle;
