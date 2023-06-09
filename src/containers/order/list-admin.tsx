import Container from "@components/container";
import { useGetOrders } from "@framework/api/orders/get";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import moment from "jalali-moment";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  time: string;
  status: string;
}

function OrderListAdmin() {
  const { data, isLoading, isFetching } = useGetOrders();
  const orders = data?.orders || [];
  const dataChangingStructure: DataType[] =
    orders.map((item) => ({
      key: item.order_Id.toString(),
      name: item.full_Address,
      status: item.order_Status,
      time: item.order_Date
    })) || [];

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
      render: (text) => (
        <p>{moment(text).locale("fa").format("YYYY/MM/DD") || ""}</p>
      )
    }
    // ,{
    //   title: "عملیات",
    //   key: "action",
    //   fixed: "right",
    //   width: 100,
    //   render: (_, record) => (
    //     <Space size="small">
    //       <Button type="link" size="small">
    //         <CheckSquareOutlined />
    //       </Button>
    //       <Button type="link" size="small">
    //         <EyeOutlined />
    //       </Button>
    //     </Space>
    //   )
    // }
  ];

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

export default OrderListAdmin;
