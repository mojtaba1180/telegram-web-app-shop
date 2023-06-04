/* eslint-disable prettier/prettier */
// eslint-disable-next-line object-curly-newline
import NotFoundPage from "@containers/404";
import CategoriesAdd from "@pages/admin/categories/add";
import {
  AdminHome,
  AdminOrders,
  AdminOrdersSingle,
  AdminProductList,
  Categories,
  CategoriesEdit,
  Checkout,
  HomePage,
  ProductAdd,
  ProductEdit,
  ProductList,
  ProductSingle,
  UserCart,
  UserProfile,
  UserProfileAddAddresses,
  UserProfileAddresses,
  UserProfileEditAddresses,
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
  { path: "/admin/categories/edit/:cat_id", element: <CategoriesEdit /> },
  // ## order
  { path: "/admin/orders", element: <AdminOrders /> },
  { path: "/admin/orders/:order_id", element: <AdminOrdersSingle /> },
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
  {
    path: "/cart",
    element: <UserCart />
  },
  {
    path: "/checkout",
    element: <Checkout />
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
        path: "orders",
        element: <UserProfileOrder />
      },
      {
        index: true,
        path: "orders/:order_id",
        element: <UserProfileOrderSingle />
      },
      {
        index: true,
        path: "address",
        element: <UserProfileAddresses />
      },
      {
        index: true,
        path: "address/add",
        element: <UserProfileAddAddresses />
      },
      {
        index: true,
        path: "address/:address_id",
        element: <UserProfileEditAddresses />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);
