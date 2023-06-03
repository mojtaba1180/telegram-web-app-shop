import { CheckSquareOutlined, EyeOutlined } from "@ant-design/icons";
import Container from "@components/container";
import { useGetOrders } from "@framework/api/orders/get";
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
        to={`/profile/order/${record.key}`}
        className="text-blue-[var(--tg-theme-button-color)]">
        {text}
        {console.log(record)}
      </Link>
    )
  },

  {
    title: "وضعیت",
    dataIndex: "status",
    key: "status",
    render: (text) => <p>{text}</p>
  },
  {
    title: "زمان",
    dataIndex: "time",
    key: "time",
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

function AdminOrderList() {
  const { data, isLoading, isFetching } = useGetOrders();

  const orders = data?.orders || [];
  const dataChangingStructure: DataType[] =
    orders.map((item) => ({
      key: item.order_Id.toString(),
      name: item.full_Address,
      status: item.order_Status,
      time: item.order_Date
    })) || [];

  return (
    <Container backwardUrl={-1} title="لیست سفارشات">
      <Table
        columns={columns}
        loading={isLoading || isFetching}
        scroll={{ x: 400 }}
        dataSource={dataChangingStructure}
      />
    </Container>
  );
}

export default AdminOrderList;
