import ProductsSkeleton from "@components/skeleton/products";
import { lazy, Suspense } from "react";

const ProductItem = lazy(() => import("./product-item")); // Lazy-loaded

function ProductList() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      {/* <ProductsSkeleton /> */}
      <div className="flex flex-wrap gap-3">
        {[...Array(10)].map((item) => (
          <ProductItem key={item} />
        ))}
      </div>
    </Suspense>
  );
}

export default ProductList;
