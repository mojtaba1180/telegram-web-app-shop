/* eslint-disable object-curly-newline */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// eslint-disable-next-line import/extensions
import Container from "@components/container";
import { useGetCategories } from "@framework/api/categories/get";
import { Button, Modal, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";

import CategoriesAdd from "./add";

const { confirm } = Modal;
interface DataType {
  key: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "نام",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>
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
      </Space>
    )
  }
];
// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown"
//   },
//   {
//     key: "2",
//     name: "Jim Green"
//   },
//   {
//     key: "3",
//     name: "Joe Black"
//   }
// ];

function List() {
  const [AddCategoriesDrawer, setAddCategoriesDrawer] = useState(false);
  const { data, isLoading, isFetching } = useGetCategories();
  const showDrawerAddCat = () => {
    setAddCategoriesDrawer(true);
  };

  const onClose = () => {
    setAddCategoriesDrawer(false);
  };
  return (
    <Container
      backwardUrl="/"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={showDrawerAddCat}
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
        dataSource={data}
      />
      {/* </Container> */}
      <CategoriesAdd isOpen={AddCategoriesDrawer} onClose={onClose} />
    </Container>
  );
}

export default List;
