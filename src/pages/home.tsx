import useTelegram from "@hooks/useTelegram";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      منو اصلی
      {/*
      <MainButtonDemo />
      <BackButtonDemo />
      <ShowPopupDemo />
      <HapticFeedbackDemo /> */}
      <Button onClick={() => navigate("/admin/products/add")}>
        افزودن محصول
      </Button>
      <Button onClick={() => navigate("/admin/products")}>محصولات ما </Button>
      <Button onClick={() => navigate("/admin/categories")}>
        دسته بندی ها
      </Button>
      <Button onClick={() => navigate("/admin/orders")}> سفارشات admin</Button>
    </div>
  );
}

export default Home;
