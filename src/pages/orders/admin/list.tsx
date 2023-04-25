import { CheckSquareOutlined, EyeOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  time: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "نام",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Link
        to={`/admin/orders/${record.key}`}
        className="text-blue-[var(--tg-theme-button-color)]">
        {text}
        {console.log(record)}
      </Link>
    )
  },
  {
    title: "زمان",
    dataIndex: "time",
    key: "time",
    render: (text) => <p>{text}</p>
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    key: "status",
    render: (text) => <p>{text}</p>
  },
  {
    title: "عملیات",
    key: "action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space size="small">
        <Button type="link" size="small">
          <CheckSquareOutlined />
        </Button>
        <Button type="link" size="small">
          <EyeOutlined />
        </Button>
      </Space>
    )
  }
];
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "2",
    name: "Jim Green",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "3",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "4",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "5",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "6",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "7",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "8",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "9",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "10",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "11",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  },
  {
    key: "12",
    name: "Joe Black",
    time: "12:22",
    status: "درحال انجام"
  }
];
function AdminOrderList() {
  return (
    <Container backwardUrl="/" title="لیست سفارشات">
      <Table columns={columns} scroll={{ x: 400 }} dataSource={data} />
    </Container>
  );
}

export default AdminOrderList;
