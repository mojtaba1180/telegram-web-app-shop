import { Categories, HomePage, ProductAdd } from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  { path: "/products", element: <ProductAdd /> },
  { path: "/products/add", element: <ProductAdd /> },
  { path: "/categories", element: <Categories /> }
]);
