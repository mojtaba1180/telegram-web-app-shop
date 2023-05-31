/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import Container from "@components/container";
import ProductLists from "@components/product/list";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetProducts } from "@framework/api/product/get";
import { Empty } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ProductList() {
  const navigate = useNavigate();
  const { data, error, refetch, isLoading, isFetching } = useGetProducts({});
  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container
      title="محصولات"
      backwardUrl="/admin"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={() => navigate("/admin/products/add")}>
      {/* <Suspense fallback={<ProductsSkeleton />}> */}
      {isLoading || isFetching ? (
        <ProductsSkeleton />
      ) : error ? (
        <>مشکلی رخ داده</>
      ) : data?.products.length === 0 ? (
        <Empty description="اطلاعاتی موجود نیست" />
      ) : (
        <ProductLists pageType="admin" data={data} />
      )}
      {/* </Suspense> */}
    </Container>
  );
}

export default ProductList;
