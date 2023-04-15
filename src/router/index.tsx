import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
