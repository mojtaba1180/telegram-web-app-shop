/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */

import Container from "@components/container";
import useDeleteAddress from "@framework/api/address/delete";
import { useGetAddresses } from "@framework/api/address/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, List, message, Popconfirm } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function AddessesList() {
  const navigate = useNavigate();
  const { id } = useTelegramUser();
  const { data, isLoading, isFetching, refetch } = useGetAddresses(id);
  const deleteMutation = useDeleteAddress();
  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location]);
  return (
    <Container
      title=" آدرس ها"
      customButton
      customButtonTitle="افزودن آدرس"
      customButtonOnClick={() => navigate("add")}
      backwardUrl="/">
      <List
        loading={isLoading || isFetching}
        itemLayout="horizontal"
        dataSource={data?.addresses}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              // avatar={
              //   <Avatar
              //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              //   />
              // }
              title={<div className="w-full text-start">{item.city}</div>}
              description={
                <div className="flex gap-3  ">
                  <div className="flex flex-row-reverse gap-2">
                    <span>{item.state}</span>
                  </div>
                  <div>
                    <span>{item.zipcode}</span>
                  </div>
                </div>
              }
            />

            <div className="flex gap-2">
              <Popconfirm
                placement="left"
                title="از حذف اطمینان دارید ؟"
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onConfirm={() => {
                  deleteMutation.mutate(
                    { user_id: id, address_id: item.address_Id },
                    {
                      onSuccess: () => {
                        message.success("آدرس با موفقیت حذف شد");
                        refetch();
                      },
                      onError: (e) => {
                        console.log(e);
                        message.error("حذف نشد دوباره تلاش کنید!");
                        refetch();
                      }
                    }
                  );
                }}
                okText="حذف"
                okType="default"
                cancelText="انصراف">
                <Button
                  key={index}
                  size="small"
                  loading={deleteMutation.isLoading}>
                  حذف
                </Button>
              </Popconfirm>
              <Button
                onClick={() => navigate(`${item.address_Id}`)}
                size="small">
                ویرایش
              </Button>
            </div>
          </List.Item>
        )}
      />
    </Container>
  );
}

export default AddessesList;
