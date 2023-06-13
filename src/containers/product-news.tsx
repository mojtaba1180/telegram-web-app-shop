import Card from "@components/product/card";
import ProductCardSkeleton from "@components/skeleton/product-card";
import { useGetProducts } from "@framework/api/product/get";
import { Divider } from "antd";

function ProductNews() {
  const { data, isLoading, isFetching } = useGetProducts({
    limit: 6,
    sortBy: "Updated_At"
  });
  return (
    <div className="flex flex-col  gap-3">
      <Divider className="my-0 p-0"> محصولات جدید ما </Divider>

      <div className="grid grid-cols-2  gap-2">
        {isLoading || isFetching ? (
          <>
            {[...Array(8)].map((_, idx) => (
              <ProductCardSkeleton delay={idx} />
            ))}
          </>
        ) : (
          data?.products.map((item) => (
            <Card
              key={`p-${item.product_Id}`}
              price={item.price}
              imageURL={item.photo_path}
              quantity={item.quantity}
              title={item.product_Name}
              url={`/products/${item.product_Id}`}
              discountedPrice={item.discountedPrice}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductNews;
