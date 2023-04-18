/* eslint-disable object-curly-newline */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";

// eslint-disable-next-line import/extensions
import Container from "@/components/container";

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
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown"
  },
  {
    key: "2",
    name: "Jim Green"
  },
  {
    key: "3",
    name: "Joe Black"
  }
];
function List() {
  return (
    <Container backwardUrl="/" title="دسته بندی ها">
      <Container titleType="small" title="افزودن دسته بندی">
        <div className="flex gap-2">
          <Input />
          <Button> افزودن </Button>
        </div>
      </Container>
      <div className="mb-3" />
      <Container titleType="small" title="لیست دسته ها ">
        <Table columns={columns} dataSource={data} />
      </Container>
    </Container>
  );
}

export default List;
