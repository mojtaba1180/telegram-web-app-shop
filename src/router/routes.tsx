// eslint-disable-next-line object-curly-newline
import {
  AdminHome,
  AdminOrders,
  AdminOrdersSingle,
  AdminProductList,
  Categories,
  HomePage,
  ProductAdd,
  ProductEdit,
  ProductList,
  ProductSingle,
  UserProfile,
  UserProfileHome,
  UserProfileOrder,
  UserProfileOrderSingle
} from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  // admin
  { path: "/admin", element: <AdminHome /> },
  //  ## products
  { path: "/admin/products", element: <AdminProductList /> },
  { path: "/admin/products/add", element: <ProductAdd /> },
  { path: "/admin/products/:id", element: <ProductEdit /> },
  // ## categories
  { path: "/admin/categories", element: <Categories /> },
  // ## order
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
  },
  // ## profile
  {
    path: "/profile",
    element: <UserProfile />,
    children: [
      {
        index: true,
        path: "",
        element: <UserProfileHome />
      },
      {
        index: true,
        path: "order",
        element: <UserProfileOrder />
      },
      {
        index: true,
        path: "order/:id",
        element: <UserProfileOrderSingle />
      },
      {
        index: true,
        path: "setting",
        element: <UserProfileHome />
      }
    ]
  }
]);
