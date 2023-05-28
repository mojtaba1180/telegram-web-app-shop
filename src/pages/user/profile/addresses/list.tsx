/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */

import Container from "@components/container";
import { Button, List, Popconfirm } from "antd";
import { useNavigate } from "react-router";

function AddessesList() {
  const navigate = useNavigate();

  const data = [
    {
      title: "آدرس  1"
    },
    {
      title: "آدرس  2"
    },
    {
      title: "آدرس  3"
    },
    {
      title: "آدرس  4"
    }
  ];

  return (
    <Container
      title=" آدرس ها"
      customButton
      customButtonTitle="افزودن آدرس"
      customButtonOnClick={() => navigate("add")}
      backwardUrl="/">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              // avatar={
              //   <Avatar
              //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              //   />
              // }
              title={<div className="w-full text-start">{item.title}</div>}
              description={
                <div className="flex gap-3  ">
                  <div className="flex flex-row-reverse gap-2">
                    <span>گیلان</span>
                  </div>
                  <div>
                    <span>4173589744</span>
                  </div>
                </div>
              }
            />

            <div className="flex gap-2">
              <Popconfirm
                placement="left"
                title="از حذف اطمینان دارید ؟"
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onConfirm={() => {}}
                okText="حذف"
                okType="default"
                cancelText="انصراف">
                <Button size="small">حذف</Button>
              </Popconfirm>
              <Button onClick={() => navigate(`${index}`)} size="small">
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
