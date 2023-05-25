import Container from "@components/container";
import ProductLists from "@components/product/list";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetProducts } from "@framework/api/product/get";
import { Suspense } from "react";

function UserCategoriesList() {
  const { data } = useGetProducts({});
  return (
    <Container title="محصولات" backwardUrl="/">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductLists pageType="user" data={data} />
      </Suspense>
    </Container>
  );
}

export default UserCategoriesList;
