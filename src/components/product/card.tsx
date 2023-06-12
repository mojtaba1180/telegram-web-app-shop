/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import { addCommas } from "@persian-tools/persian-tools";
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string | [];
  discountedPrice: number;
}
function Card({
  url,
  title,
  price,
  quantity,
  imageURL,
  discountedPrice
}: Props) {
  const finalPrice =
    discountedPrice !== price && 100 - (discountedPrice * 100) / price;
  return (
    <Link
      to={url}
      className={`flex h-[300px] w-full ${
        finalPrice && "border-red-700/70"
      }  flex-col overflow-hidden  rounded-lg border-2 border-[var(--tg-theme-secondary-bg-color)]`}>
      <div
        className=" relative ml-auto h-[280px] w-full  bg-[var(--tg-theme-secondary-bg-color)] bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url('${import.meta.env.VITE_API_URL}/${imageURL}')`
        }}>
        {finalPrice && (
          <span className="absolute right-0 top-0 rounded-bl-lg bg-red-700 p-2">
            {finalPrice} %
          </span>
        )}
      </div>
      <div className="flex h-full w-full flex-col items-start justify-between gap-3 p-2">
        <div className="mb-1 ml-auto h-5 w-full select-none text-right ">
          {title}
        </div>
        <div className="flex w-full  flex-col gap-2">
          {/* <div className="flex items-center justify-between">
            <div className="rounded-xl bg-[var(--tg-theme-secondary-bg-color)] px-1 pt-1 text-sm ">
              ⭐4.3
            </div>
            <div className="select-none text-sm">غذا</div>
          </div> */}
          <Divider className="my-0 py-0" />
          <div
            className={`flex flex-row gap-3 self-end text-right ${
              finalPrice && " text-sm text-gray-500 line-through"
            }`}>
            <span>تومان</span> <span>{addCommas(price)}</span>
          </div>
          {finalPrice && (
            <div className="flex flex-row gap-3 self-end text-right">
              <span>تومان</span> <span>{addCommas(discountedPrice)}</span>
            </div>
          )}
          {/* <div className="self-start text-left">تعداد :{quantity} عدد</div> */}
        </div>
        <Button className="w-full self-end" type="default">
          دیدن محصول
        </Button>
      </div>
    </Link>
  );
}

export default Card;
