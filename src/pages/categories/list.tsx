/* eslint-disable object-curly-newline */
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled
} from "@ant-design/icons";
import { Button, Input, Modal, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";

// eslint-disable-next-line import/extensions
import Container from "@/components/container";

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
  const handleSubmitAddCategories = () =>
    new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    }).catch(() => console.log("Oops errors!"));

  const showPromiseConfirm = () => {
    confirm({
      title: "افزودن دسته بندی جدید",
      icon: <ExclamationCircleFilled />,
      content: <Input />,

      onOk() {
        return handleSubmitAddCategories;
      },
      okType: "default"
    });
  };
  return (
    <Container
      backwardUrl="/"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={showPromiseConfirm}
      title="دسته بندی ها">
      {/* <Container titleType="small" title="افزودن دسته بندی">
        <div className="flex gap-2">
          <Input />
          <Button> افزودن </Button>
        </div>
      </Container> */}
      <div className="mb-3" />
      {/* <Container titleType="small" title="لیست دسته ها "> */}
      <Table columns={columns} dataSource={data} />
      {/* </Container> */}
    </Container>
  );
}

export default List;
