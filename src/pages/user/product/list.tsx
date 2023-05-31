import Container from "@components/container";
import ProductLists from "@components/product/list";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetProducts } from "@framework/api/product/get";
import { Suspense } from "react";

function ProductList() {
  const { data } = useGetProducts({});
  console.log(data);
  return (
    <Container title="محصولات" backwardUrl="/">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductLists pageType="user" data={data} />
      </Suspense>
    </Container>
  );
}

export default ProductList;
