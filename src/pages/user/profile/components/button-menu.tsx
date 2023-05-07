import {
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function UserProfileButtonMenu() {
  return (
    <div className="mx-auto flex h-12 w-[90%] max-w-[450px] justify-between rounded-lg bg-[var(--tg-theme-bg-color)] shadow-lg ">
      <Link
        to="/profile"
        className="flex w-1/3 flex-col items-center justify-center gap-1 ">
        <UserOutlined /> پروفایل
      </Link>
      <Link
        to="/profile/order"
        className="flex w-1/3 flex-col items-center justify-center gap-1 ">
        <UnorderedListOutlined /> سفارشات
      </Link>
      {/* <div className="flex w-1/4 flex-col items-center justify-center ">
        <UserOutlined />
      </div> */}
      <Link
        to="/profile/setting"
        className="flex w-1/3 flex-col items-center justify-center gap-1 ">
        <SettingOutlined /> تنظیمات
      </Link>
    </div>
  );
}

export default UserProfileButtonMenu;
