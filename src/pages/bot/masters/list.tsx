/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Container from "@components/container";
import useDeleteMaster from "@framework/api/master/delete";
import { useGetMasters } from "@framework/api/master/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Popconfirm, Space, Table, message } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function BotMastersList() {
  const navigate = useNavigate();
  const { data, isFetching, isLoading, refetch } = useGetMasters();
  const deleteMutation = useDeleteMaster();
  const location = useLocation();
  const { id: user_id } = useTelegramUser();
  const handleDeleteMaster = (id: string) => {
    deleteMutation.mutate(
      {
        master_id: id,
        user_id
      },
      {
        onSuccess: () => {
          message.success("کاربر حذف شد");
          refetch();
        },
        onError: () => {
          message.error(" مشکل برای حذف رخ داد ");
          refetch();
        }
      }
    );
  };

  const dataSource = data?.map((item) => ({
    ...item,
    title: `${item.name} ${item.last_Name} `,
    key: item.id
  }));
  useEffect(() => {
    refetch();
  }, [location, refetch]);

  const columns = [
    {
      title: "نام",
      dataIndex: "title",
      key: "name"
    },
    {
      title: "عملیات",
      dataIndex: "عملیات",
      key: "عملیات",
      render: (_, record) => (
        <Space size="small">
          <Link state={record} to={`${record.id}`}>
            <EditOutlined />
          </Link>
          <Popconfirm
            placement="top"
            title="حذف این استاد ؟"
            onConfirm={() => handleDeleteMaster(record.id)}
            okText="حذف"
            okType="default"
            cancelText="انصراف">
            <Button type="link" size="small" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];
  return (
    <Container
      title="اساتید"
      backwardUrl="/bot"
      customButton
      customButtonTitle="افزودن"
      customButtonOnClick={() => navigate("add")}>
      <Table
        loading={isFetching || isLoading || deleteMutation.isLoading}
        dataSource={dataSource}
        columns={columns}
      />
    </Container>
  );
}

export default BotMastersList;
