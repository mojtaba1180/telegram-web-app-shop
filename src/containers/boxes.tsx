import { QueryCache } from "@tanstack/react-query";
import { Divider } from "antd";
import { Link } from "react-router-dom";

function Boxes() {
  // eslint-disable-next-line prettier/prettier
  const queryCache = new QueryCache();

  const query = queryCache.findAll(["user-info"]);

  console.log(query);
  const itemClass =
    "w-full h-20 border-2 flex border-[var(--tg-theme-button-color)] border-opacity-80 items-center justify-center rounded-lg  ";
  return (
    <div className="flex w-full flex-col gap-3 ">
      <div> منو </div>
      <Divider className="my-0 p-0" />
      <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
        <Link className={itemClass} to="/products">
          محصولات
        </Link>
        <Link className={itemClass} to="/profile">
          حساب کاربری
        </Link>
        {/* <Link className={itemClass} to="/admin">
          ادمین
        </Link> */}
        <Link className={`${itemClass} col-span-2 `} to="/cart">
          سبد خرید
        </Link>
      </div>
    </div>
  );
}

export default Boxes;
