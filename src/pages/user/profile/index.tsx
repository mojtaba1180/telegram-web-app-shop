import Container from "@components/container";
import { Outlet } from "react-router";

import UserProfileButtonMenu from "./components/button-menu";

function UserProfile() {
  return (
    <Container title="حساب کاربری" backwardUrl="/">
      <Outlet />
      <div className="absolute bottom-6 left-0 w-full ">
        <UserProfileButtonMenu />
      </div>
    </Container>
  );
}

export default UserProfile;
