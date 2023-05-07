import ProductsSkeleton from "@components/skeleton/products";
import { lazy, Suspense } from "react";

const ProductItem = lazy(() => import("./item")); // Lazy-loaded

interface Props {
  pageType: "admin" | "user";
}

function ProductList({ pageType }: Props) {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      {/* <ProductsSkeleton /> */}
      <div className="flex flex-wrap gap-3">
        {[...Array(10)].map((item) => (
          <ProductItem
            url={
              pageType === "admin" ? "/admin/products/12345" : "/products/1234"
            }
            key={item}
          />
        ))}
      </div>
    </Suspense>
  );
}

export default ProductList;
