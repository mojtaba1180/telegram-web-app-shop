/* eslint-disable object-curly-newline */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// eslint-disable-next-line import/extensions
import Container from "@components/container";
import { useGetCategories } from "@framework/api/categories/get";
import { TypeCategories } from "@framework/types";
import { Button, Modal, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const { confirm } = Modal;

const columns: ColumnsType<TypeCategories> = [
  {
    title: "نام",
    dataIndex: "name",
    key: "name",
    render: (_, record) => <p>{record.category_Name}</p>
  },
  {
    title: "عملیات",
    key: "action",
    render: (_, record) => (
      <Space size="small">
        <Button type="link" size="small">
          <EditOutlined />
        </Button>
        <Button type="link" size="small" danger>
          <DeleteOutlined />
        </Button>
        <Link to={`/admin/categories/${record.category_Id}`}>
          افزودن زیرمجموعه
        </Link>
      </Space>
    )
  }
];
function List() {
  const { data, error, isLoading, isFetching, refetch } = useGetCategories();
  const navigate = useNavigate();
  const customizeData = () => {
    const childHandler = (childItem) => {
      if (childItem.length > 0) {
        return childItem.map((item) => {
          const c = {
            ...item,
            key: item.category_Id
          };

          if (item.children && item.children.length > 0) {
            c.children = childHandler(item.children);
          } else {
            c.children = null;
          }
          return c;
        });
      }
      return null;
    };
    return data?.map((item) => ({
      ...item,
      key: item.category_Id,
      children: childHandler(item.children)
    }));
  };

  useEffect(() => {
    refetch();
  }, []);
  return (
    <Container
      backwardUrl="/admin"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={() => navigate("/admin/categories/null")}
      title="دسته بندی ها">
      {/* <Container titleType="small" title="افزودن دسته بندی">
        <div className="flex gap-2">
          <Input />
          <Button> افزودن </Button>
        </div>
      </Container> */}
      <div className="mb-3" />
      {/* <Container titleType="small" title="لیست دسته ها "> */}
      <Table
        columns={columns}
        loading={isLoading || isFetching}
        dataSource={customizeData()}
      />
      {/* </Container> */}
      {/* <CategoriesAdd isOpen={AddCategoriesDrawer} onClose={onClose} /> */}
    </Container>
  );
}

export default List;
