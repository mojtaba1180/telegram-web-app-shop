// eslint-disable-next-line object-curly-newline
import {
  AdminOrders,
  AdminOrdersSingle,
  AdminProductList,
  Categories,
  HomePage,
  ProductAdd,
  ProductEdit,
  ProductList,
  ProductSingle
} from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  // admin
  { path: "/admin/products", element: <AdminProductList /> },
  { path: "/admin/products/add", element: <ProductAdd /> },
  { path: "/admin/products/:id", element: <ProductEdit /> },
  { path: "/admin/categories", element: <Categories /> },
  { path: "/admin/orders", element: <AdminOrders /> },
  { path: "/admin/orders/:id", element: <AdminOrdersSingle /> },
  // user
  {
    path: "/products",
    element: <ProductList />
  },
  {
    path: "/products/:id",
    element: <ProductSingle />
  }
]);
