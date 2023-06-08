import { Outlet } from "react-router";

import UserProfileButtonMenu from "./components/button-menu";

function UserProfile() {
  return (
    <div className="">
      <div className="mb-20">
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full ">
        <UserProfileButtonMenu />
      </div>
      {/* </Container> */}
    </div>
  );
}

export default UserProfile;
