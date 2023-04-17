import { HomePage, ProductAdd } from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  { path: "/products/add", element: <ProductAdd /> }
]);
