/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import ProductsSkeleton from "@components/skeleton/products";
import { useGetCategories } from "@framework/api/categories/get";
import { useGetProducts } from "@framework/api/product/get";
import { Cascader, Empty, Pagination } from "antd";
import { useEffect, useState } from "react";

import ProductItem from "./item";

interface Props {
  pageType: "admin" | "user";
  // data: TypeListProducts | undefined;
}
function ProductList({ pageType }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categoryFilterId, setCategoryFilterId] = useState<number | undefined>(
    undefined
  );

  const { data, error, refetch, isLoading, isFetching } = useGetProducts({
    limit: 15,
    page: currentPage,
    categoryId: categoryFilterId
  });
  const {
    data: catData,
    isLoading: isCatLoading,
    isFetching: isCatFetching
  } = useGetCategories();
  useEffect(() => {
    refetch();
  }, [refetch, currentPage, categoryFilterId]);
  return (
    <div className="flex flex-col">
      <div className="mb-10 flex flex-col items-end justify-center gap-2 ">
        <span>فیلتر ها</span>
        <div className="w-1/2">
          <Cascader
            loading={isCatLoading || isCatFetching}
            disabled={isCatLoading || isCatFetching}
            style={{ width: "100%" }}
            options={catData}
            placeholder="دسته بندی"
            fieldNames={{
              label: "category_Name",
              value: "category_Id",
              children: "children"
            }}
            multiple={false}
            changeOnSelect
            onChange={(e) => {
              if (e) {
                setCategoryFilterId(e.slice(-1)[0]);
              } else {
                setCategoryFilterId(undefined);
              }
            }}
            maxTagCount="responsive"
          />
        </div>
      </div>
      {/* <Suspense fallback={<ProductsSkeleton />}> */}
      {/* <ProductsSkeleton /> */}
      <div className="mb-10 flex flex-wrap gap-3">
        {isLoading || isFetching ? (
          <ProductsSkeleton />
        ) : error ? (
          <>مشکلی رخ داده</>
        ) : data?.products.length === 0 ? (
          <div className="flex w-full items-center justify-center">
            <Empty description="اطلاعاتی موجود نیست" />
          </div>
        ) : (
          <>
            {data?.products.map((item) => (
              <ProductItem
                title={item.product_Name}
                price={item.price}
                imageURL={item.photo_path}
                quantity={item.quantity}
                product_Id={item.product_Id}
                url={
                  pageType === "admin"
                    ? `/admin/products/${item?.product_Id}`
                    : `/products/${item?.product_Id}`
                }
                key={item?.product_Id}
              />
            ))}
          </>
        )}
      </div>
      <Pagination
        defaultCurrent={currentPage}
        onChange={(e) => setCurrentPage(e)}
        pageSize={15}
        total={data?.totalRows}
      />
      {/* </Suspense> */}
    </div>
  );
}

export default ProductList;
