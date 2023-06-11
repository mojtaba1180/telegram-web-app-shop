import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Admin() {
  // const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      منو ادمین
      {/*
      <MainButtonDemo />
      <BackButtonDemo />
      <ShowPopupDemo />
      <HapticFeedbackDemo /> */}
      <Button onClick={() => navigate("/admin/products")}>محصولات</Button>
      <Button onClick={() => navigate("/admin/categories")}>
        دسته بندی ها
      </Button>
      <Button onClick={() => navigate("/admin/orders")}>سفارشات کاربران</Button>
      {/* <Button onClick={() => navigate("/admin/discounts")}> تخفیفات </Button> */}
      <Button onClick={() => navigate("/admin/slider")}>اسلایدر </Button>
    </div>
  );
}

export default Admin;
