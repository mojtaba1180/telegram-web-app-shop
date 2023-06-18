import Container from "@components/container";
import useGetUserInfo from "@framework/api/user-information/get";
import useTelegramUser from "@hooks/useTelegramUser";
import { Alert, List } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function StatusBox({ title, total }: { title: string; total: number }) {
  return (
    <div className="flex h-full w-full  flex-col items-center justify-evenly rounded-lg border-2  ">
      <div className="text-[var(--tg-theme-button-color)]">{total}</div>
      <div>{title}</div>
    </div>
  );
}

function UserProfileHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useTelegramUser();
  const { data, isFetching, isLoading, refetch } = useGetUserInfo({
    user_Id: id
  });
  useEffect(() => {
    refetch();
  }, [location, refetch]);
  const isCompleteProfile =
    !data?.phone_Number || !data?.name || !data?.last_Name;
  return (
    <Container
      title="حساب کاربری"
      customButton
      customButtonTitle="ویرایش"
      customButtonOnClick={() => navigate("edit")}
      backwardUrl="/">
      {/* <div className="grid h-52 w-full grid-cols-2 gap-2">
        {BoxItem.map((item) => (
          <StatusBox title={item.title} total={item.total} />
        ))}
      </div> */}

      {isCompleteProfile && (
        <Alert
          type="info"
          message={
            <div className="flex">
              <div>لطفا حساب کاربری خود را قبل از ثبت سفارش تکمیل کنید</div>
              <Link
                className=" mx-2 flex items-center justify-center rounded-lg border-2 px-2"
                to="edit">
                تکمیل
              </Link>
            </div>
          }
        />
      )}
      <List loading={isFetching || isLoading} className="mt-5 w-full" bordered>
        <List.Item>
          <List.Item.Meta
            title="نام :"
            description={
              `${data?.name || ""} ${data?.last_Name || ""}` || "ندارد"
            }
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
