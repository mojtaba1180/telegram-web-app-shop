/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import { addCommas } from "@persian-tools/persian-tools";
import { useNavigate } from "react-router";

interface Props {
  url: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string | Array<string>;
}

function ProductItem({ url, title, price, quantity, imageURL }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      className=" flex h-[120px] w-full overflow-hidden  rounded-lg border-2 border-[var(--tg-theme-secondary-bg-color)]">
      <div className="flex w-2/3 flex-col items-center justify-between p-2">
        <p className="mb-1 ml-auto h-5 w-full select-none text-right ">
          {title}
        </p>
        <div className="flex w-full  flex-col gap-2">
          {/* <div className="flex items-center justify-between">
            <div className="rounded-xl bg-[var(--tg-theme-secondary-bg-color)] px-1 pt-1 text-sm ">
              ⭐4.3
            </div>
            <div className="select-none text-sm">غذا</div>
          </div> */}
          <div className="self-end text-left">
            قیمت :{addCommas(price)} تومان
          </div>
          <div className="self-end text-left">تعداد :{quantity} عدد</div>
        </div>
      </div>
      <div
        className=" ml-auto h-full w-1/3  bg-[var(--tg-theme-secondary-bg-color)] bg-cover"
        style={{
          backgroundImage: `url('${import.meta.env.VITE_API_URL}/${imageURL}')`
        }}
      />
    </div>
  );
}

export default ProductItem;
