/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import {
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function UserProfileButtonMenu() {
  return (
    <div
      style={{ boxShadow: "0 0 10px -6px" }}
      className=" mx-auto flex h-16 w-full max-w-[450px] justify-between rounded-t-lg border-b-2 border-[var(--tg-theme-button-color)] bg-[var(--tg-theme-bg-color)] p-2 shadow-lg ">
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
        to="/profile/address"
        className="flex w-1/3 flex-col items-center justify-center gap-1 ">
        <SettingOutlined /> تنظیمات
      </Link>
    </div>
  );
}

export default UserProfileButtonMenu;
