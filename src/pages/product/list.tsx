import Container from "@components/container";
import ProductsSkeleton from "@components/skeleton/products";
import { Suspense } from "react";

import ProductLists from "./components/product-list";

function ProductList() {
  return (
    <Container title="محصولات">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductLists />
      </Suspense>
    </Container>
  );
}

export default ProductList;
