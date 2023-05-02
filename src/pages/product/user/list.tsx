import Container from "@components/container";
import ProductLists from "@components/product/product-list";
import ProductsSkeleton from "@components/skeleton/products";
import { Suspense } from "react";

function ProductList() {
  return (
    <Container title="محصولات" backwardUrl="/">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductLists />
      </Suspense>
    </Container>
  );
}

export default ProductList;
