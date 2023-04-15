import { HomePage, ProductAdd, ProductList } from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/product-list",
    element: <ProductList />
  },
  {
    path: "/product-add",
    element: <ProductAdd />
  }
]);
