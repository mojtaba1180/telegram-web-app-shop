// eslint-disable-next-line object-curly-newline
import CategoriesAdd from "@pages/admin/categories/add";
import {
  AdminHome,
  AdminOrders,
  AdminOrdersSingle,
  AdminProductList,
  Categories,
  CategoriesEdit,
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
  { path: "/admin/products/:product_id", element: <ProductEdit /> },
  // ## categories
  { path: "/admin/categories", element: <Categories /> },
  { path: "/admin/categories/:parentId", element: <CategoriesAdd /> },
  { path: "/admin/categories/edit/:parentId", element: <CategoriesEdit /> },
  // ## order
  { path: "/admin/orders", element: <AdminOrders /> },
  { path: "/admin/orders/:id", element: <AdminOrdersSingle /> },
  // user
  {
    path: "/products",
    element: <ProductList />
  },
  {
    path: "/products/:product_id",
    element: <ProductSingle />
  },
  {
    path: "/categories",
    element: <Categories />
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
