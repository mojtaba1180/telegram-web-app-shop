/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import {
  FileDoneOutlined,
  ReloadOutlined,
  SlidersOutlined
} from "@ant-design/icons";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetCategories } from "@framework/api/categories/get";
import { useGetProducts } from "@framework/api/product/get";
import {
  Button,
  Divider,
  Drawer,
  Empty,
  Input,
  Pagination,
  Select,
  Tree
} from "antd";
import { useState } from "react";

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
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [Order, setOrder] = useState<"desc" | "asc">("desc");

  const { data, error, refetch, isLoading, isFetching } = useGetProducts({
    limit: 10,
    page: currentPage,
    categoryId: categoryFilterId,
    name: search,
    order: Order
  });
  const {
    data: catData,
    isLoading: isCatLoading,
    isFetching: isCatFetching
  } = useGetCategories({});
  // useEffect(() => {
  //   refetch();
  // }, [refetch, currentPage]);
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col items-end justify-center gap-2 ">
        <Input.Search
          loading={isLoading || isFetching}
          allowClear
          onSearch={(e) => {
            setSearch(e);
            refetch();
          }}
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-end justify-end">
            <Select
              onChange={(e) => {
                setOrder(e);
                refetch();
              }}
              value={Order}
              defaultValue="desc"
              style={{ width: "fit-content" }}
              options={[
                { value: "asc", label: "قیمت از کم به زیاد" },
                { value: "desc", label: "قیمت از زیاد به کم" }
              ]}
            />
          </div>
          <Button onClick={() => setOpen(true)} icon={<SlidersOutlined />}>
            فیلتر ها
          </Button>
        </div>
        <Drawer
          extra={
            <div className="flex gap-3">
              <Button
                className="w-full"
                onClick={() => {
                  refetch();
                  setOpen(false);
                }}
                danger
                size="large">
                حذف فیلتر ها
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  refetch();
                  setOpen(false);
                }}
                size="large"
                icon={<FileDoneOutlined />}>
                اعمال فیلتر
              </Button>
            </div>
          }
          title=" فیلتر ها"
          placement="bottom"
          onClose={() => setOpen(false)}
          width="100%"
          height="90%"
          className="rounded-t-3xl"
          open={open}>
          <div className="flex h-full w-full flex-col items-center justify-start gap-5">
            <div className="w-full">
              <Tree
                loading={isCatLoading || isCatFetching}
                disabled={isCatLoading || isCatFetching}
                style={{ width: "100%" }}
                treeData={catData}
                showLine
                defaultExpandAll
                checkable
                onCheck={(e) => {
                  setCategoryFilterId(e);
                }}
                fieldNames={{
                  title: "category_Name",
                  key: "category_Id",
                  children: "children"
                }}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                allowClear
                multiple
                selectable={false}
              />
            </div>
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
          <div className="flex w-full flex-col items-center justify-center gap-5">
            مشکلی رخ داده
            <Button onClick={() => refetch()} icon={<ReloadOutlined />}>
              تلاش مجدد
            </Button>
          </div>
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
                discountedPrice={item.discountedPrice}
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
        onChange={(e) => {
          setCurrentPage(e);
          refetch();
        }}
        pageSize={10}
        total={data?.totalRows}
      />
      {/* </Suspense> */}
    </div>
  );
}

export default ProductList;
