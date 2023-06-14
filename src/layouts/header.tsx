import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className="flex w-full items-center justify-between rounded-lg ">
      <Link
        className="flex items-center gap-2 rounded-lg  bg-[var(--tg-theme-secondary-bg-color)]  p-3"
        to="/cart">
        <ShoppingCartOutlined style={{ fontSize: "22px" }} />
        <span>سبد خرید من</span>
      </Link>
      <Link
        className="flex items-center gap-2 rounded-lg  bg-[var(--tg-theme-secondary-bg-color)]  p-3"
        to="/profile/home">
        <span>حساب کاربری</span>
        <UserOutlined style={{ fontSize: "22px" }} />
      </Link>
    </div>
  );
}

export default AppHeader;
