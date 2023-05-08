import { Outlet } from "react-router";

import UserProfileButtonMenu from "./components/button-menu";

function UserProfile() {
  return (
    <div className="">
      {/* <Container title="حساب کاربری" backwardUrl="/"> */}
      <div className="">
        <Outlet />
      </div>
      <div className="fixed bottom-3 left-0 z-50 w-full ">
        <UserProfileButtonMenu />
      </div>

      {/* </Container> */}
    </div>
  );
}

export default UserProfile;
