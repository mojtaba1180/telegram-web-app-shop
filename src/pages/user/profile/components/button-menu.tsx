/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
import "./style.scss";

import {
  IdcardOutlined,
  UnorderedListOutlined,
  UserOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function UserProfileButtonMenu() {
  return (
    <div className=" profile-menu mx-auto flex h-16 w-full max-w-[450px] justify-between rounded-lg  bg-[var(--tg-theme-secondary-bg-color)] p-2  ">
      <NavLink
        to="/profile/home"
        className="flex w-1/3 flex-col items-center justify-center gap-1 rounded-lg  ">
        <UserOutlined /> حساب کاربری
      </NavLink>
      <NavLink
        to="/profile/orders"
        className="flex w-1/3 flex-col items-center justify-center gap-1 rounded-lg ">
        <UnorderedListOutlined /> سفارشات
      </NavLink>
      {/* <div className="flex w-1/4 flex-col items-center justify-center ">
        <UserOutlined />
      </div> */}
      <NavLink
        to="/profile/address"
        className="flex w-1/3 flex-col items-center justify-center gap-1 rounded-lg ">
        <IdcardOutlined /> آدرس ها
      </NavLink>
    </div>
  );
}

export default UserProfileButtonMenu;
