import { Divider } from "antd";

function Boxes() {
  const itemClass =
    "w-full h-20 border-2 flex border-[var(--tg-theme-button-color)] items-center justify-center rounded-lg  ";
  return (
    <div className="flex w-full flex-col gap-3">
      <div> منو </div>
      <Divider className="my-0 p-0" />
      <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
        <div className={itemClass}>محصولات</div>
        <div className={itemClass}>حساب کاربری</div>
        <div className={itemClass}>سفارشات</div>
        <div className={itemClass}> دسته بندی ها </div>
      </div>
    </div>
  );
}

export default Boxes;
