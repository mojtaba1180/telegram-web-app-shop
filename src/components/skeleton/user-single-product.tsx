import { Divider } from "antd";

function UserSingleProductSkeleton() {
  return (
    <div className="mb-10 flex flex-col items-end">
      <div className=" flex h-[170px] w-full animate-pulse items-center justify-center  bg-[var(--tg-theme-secondary-bg-color)]" />
      <div className=" my-6 h-6 w-1/2 animate-pulse bg-[var(--tg-theme-secondary-bg-color)]   " />
      <div className="flex w-full animate-pulse justify-between  ">
        <div className="flex h-6 w-20 animate-pulse items-center justify-center  bg-[var(--tg-theme-secondary-bg-color)] " />
        <div className="h-6 w-32 animate-pulse bg-[var(--tg-theme-secondary-bg-color)] " />
      </div>
      <div className="my-4 h-10 w-full animate-pulse  bg-[var(--tg-theme-secondary-bg-color)]  " />
      <div className="h-fit w-full">
        <div className="-mb-4 flex w-full animate-pulse justify-end gap-2 ">
          <div className="flex h-4 w-20 animate-pulse items-center justify-center  bg-[var(--tg-theme-secondary-bg-color)] " />
          <div className="h-4 w-32 animate-pulse bg-[var(--tg-theme-secondary-bg-color)] " />
        </div>
        <Divider />
        <div className=" flex h-[120px] w-full animate-pulse items-center justify-center  bg-[var(--tg-theme-secondary-bg-color)]" />
      </div>
    </div>
  );
}

export default UserSingleProductSkeleton;
