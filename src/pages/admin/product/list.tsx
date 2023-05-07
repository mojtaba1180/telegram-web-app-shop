import Container from "@components/container";
import ProductLists from "@components/product/list";
import ProductsSkeleton from "@components/skeleton/products";
import { Suspense } from "react";
import { useNavigate } from "react-router";

function ProductList() {
  const navigate = useNavigate();
  return (
    <Container
      title="محصولات"
      backwardUrl={-1}
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={() => navigate("/admin/products/add")}>
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductLists pageType="admin" />
      </Suspense>
    </Container>
  );
}

export default ProductList;
