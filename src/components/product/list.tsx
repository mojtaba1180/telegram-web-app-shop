/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import { SlidersOutlined } from "@ant-design/icons";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetCategories } from "@framework/api/categories/get";
import { useGetProducts } from "@framework/api/product/get";
import { Button, Divider, Drawer, Empty, Pagination, TreeSelect } from "antd";
import { useEffect, useState } from "react";

import ProductItem from "./item";

interface Props {
  pageType: "admin" | "user";
  // data: TypeListProducts | undefined;
}
function ProductList({ pageType }: Props) {
  const [open, setOpen] = useState(false);

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
  }, [refetch, currentPage]);
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col items-end justify-center gap-2 ">
        <Button onClick={() => setOpen(true)} icon={<SlidersOutlined />}>
          فیلتر ها
        </Button>
        <Drawer
          title=" فیلتر ها"
          placement="right"
          onClose={() => setOpen(false)}
          width="100%"
          open={open}>
          <div className="flex h-full w-full flex-col items-center justify-between">
            <div className="w-full">
              <TreeSelect
                loading={isCatLoading || isCatFetching}
                disabled={isCatLoading || isCatFetching}
                style={{ width: "100%" }}
                treeData={catData}
                treeLine
                placeholder="دسته بندی"
                fieldNames={{
                  label: "category_Name",
                  value: "category_Id",
                  children: "children"
                }}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                showSearch
                allowClear
                multiple
                onChange={(e) => {
                  setCategoryFilterId(e);

                  // if (e) {
                  //   setCategoryFilterId(e.slice(-1)[0]);
                  // } else {
                  //   setCategoryFilterId(undefined);
                  // }
                }}
              />
            </div>
            {console.log(categoryFilterId)}
            <Button
              className="w-full"
              onClick={() => {
                refetch();
                setOpen(false);
              }}
              size="large"
              icon={<SlidersOutlined />}>
              اعمال فیلتر
            </Button>
          </div>
        </Drawer>
      </div>
      <Divider />
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
                pageType={pageType}
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
