import { Outlet } from "react-router";

import UserProfileButtonMenu from "./components/button-menu";

function UserProfile() {
  return (
    <div className="relative">
      {/* <div className="fixed left-0 top-0 z-50 w-full "> */}
      <UserProfileButtonMenu />
      {/* </div> */}
      <div className="mt-10">
        <Outlet />
      </div>
      {/* </Container> */}
    </div>
  );
}

export default UserProfile;
