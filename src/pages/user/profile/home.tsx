import Container from "@components/container";
import useGetUserInfo from "@framework/api/user-information/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { List } from "antd";

function StatusBox({ title, total }: { title: string; total: number }) {
  return (
    <div className="flex h-full w-full  flex-col items-center justify-evenly rounded-lg border-2  ">
      <div className="text-[var(--tg-theme-button-color)]">{total}</div>
      <div>{title}</div>
    </div>
  );
}

function UserProfileHome() {
  // const BoxItem = [
  //   {
  //     title: "سفارش در حال انجام",
  //     total: 0
  //   },
  //   {
  //     title: "سفارش تکمیل شده",
  //     total: 0
  //   },
  //   {
  //     title: "سفارش در انتظار بررسی",
  //     total: 0
  //   },
  //   {
  //     title: "سفارش لغو شده",
  //     total: 0
  //   }
  // ];
  const { id } = useTelegramUser();
  const { data, isFetching, isLoading } = useGetUserInfo({ user_Id: id });
  return (
    <Container title="حساب کاربری" backwardUrl="/">
      {/* <div className="grid h-52 w-full grid-cols-2 gap-2">
        {BoxItem.map((item) => (
          <StatusBox title={item.title} total={item.total} />
        ))}
      </div> */}

      <List loading={isFetching || isLoading} className="w-full" bordered>
        <List.Item>
          <List.Item.Meta
            title="نام :"
            description={`${data?.name} ${data?.last_Name}` || "ندارد"}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="شماره همراه:"
            description={`${data?.phone_Number || "ندارد"}`}
          />
        </List.Item>
      </List>
    </Container>
  );
}

export default UserProfileHome;
