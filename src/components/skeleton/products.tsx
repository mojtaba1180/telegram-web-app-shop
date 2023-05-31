function ProductsSkeletonItem({ itemIndex }: { itemIndex: number }) {
  return (
    <div
      style={{ animationDelay: `${itemIndex * 3}00ms` }}
      className=" flex h-[120px] w-full animate-pulse overflow-hidden  rounded-lg border-2 border-[var(--tg-theme-secondary-bg-color)]">
      <div className="flex w-2/3 flex-col items-center justify-between p-2">
        <div className="mb-1 ml-auto h-5 w-1/3 select-none rounded-lg  bg-[var(--tg-theme-secondary-bg-color)] text-right " />
        <p className="mb-1 ml-auto h-5 w-full select-none rounded-lg bg-[var(--tg-theme-secondary-bg-color)] text-right text-gray-500 " />
        <div className="flex w-full  flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="h-3 w-8 rounded-xl bg-[var(--tg-theme-secondary-bg-color)] px-1 pt-1 text-sm " />
            <div className="h-3 w-8 select-none rounded-lg bg-[var(--tg-theme-secondary-bg-color)] text-sm " />
          </div>
          <div className="h-4 w-24 self-start rounded-lg bg-[var(--tg-theme-secondary-bg-color)] text-left  " />
        </div>
      </div>
      <div className=" ml-auto h-full w-1/3  bg-[var(--tg-theme-secondary-bg-color)]" />
    </div>
  );
}
function ProductsSkeleton() {
  return (
    <div className="flex flex-wrap gap-3">
      {[...Array(10)].map((_, idx) => (
        <ProductsSkeletonItem itemIndex={idx} key={idx} />
      ))}
    </div>
  );
}

export default ProductsSkeleton;
