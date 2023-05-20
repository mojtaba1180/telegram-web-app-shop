/* eslint-disable object-curly-newline */
import Container from "@components/container";
import ProductLists from "@components/product/list";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetProducts } from "@framework/api/product/get";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ProductList() {
  const navigate = useNavigate();
  const { data, error, refetch, isLoading, isFetching } = useGetProducts({});
  useEffect(() => {
    refetch();
  }, []);
  if (isLoading || isFetching) {
    return <ProductsSkeleton />;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <Container
      title="محصولات"
      backwardUrl="/admin"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={() => navigate("/admin/products/add")}>
      {/* <Suspense fallback={<ProductsSkeleton />}> */}
      <ProductLists pageType="admin" data={data} />
      {/* </Suspense> */}
    </Container>
  );
}

export default ProductList;
