function ProductCardSkeleton({ delay }: { delay: number }) {
  return (
    <div
      style={{ animationDelay: `${delay * 3}00ms` }}
      className="flex h-[220px] w-full   animate-pulse flex-col overflow-hidden  rounded-lg  bg-[var(--tg-theme-secondary-bg-color)]"
    />
  );
}

export default ProductCardSkeleton;
