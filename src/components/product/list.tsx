/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import { TypeListProducts } from "@framework/types";

import ProductItem from "./item";

interface Props {
  pageType: "admin" | "user";
  data: TypeListProducts | undefined;
}
function ProductList({ pageType, data }: Props) {
  return (
    <>
      {/* <Suspense fallback={<ProductsSkeleton />}> */}
      {/* <ProductsSkeleton /> */}
      <div className="flex flex-wrap gap-3">
        {data?.products.map((item) => (
          <ProductItem
            title={item.product_Name}
            price={item.price}
            quantity={item.quantity}
            url={
              pageType === "admin"
                ? `/admin/products/${item?.product_Id}`
                : "/products/1234"
            }
            key={item?.product_Id}
          />
        ))}
      </div>
      {/* </Suspense> */}
    </>
  );
}

export default ProductList;
