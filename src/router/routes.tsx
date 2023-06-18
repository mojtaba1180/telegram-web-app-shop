/* eslint-disable prettier/prettier */
// eslint-disable-next-line object-curly-newline
import NotFoundPage from "@containers/404";
import {
  AdminAddSlider,
  AdminHome,
  AdminOrders,
  AdminOrdersSingle,
  AdminProductList,
  AdminSlider,
  BotAddMasters,
  BotEditMasters,
  BotMasters,
  BotPanel,
  BotSetting,
  Categories,
  CategoriesAdd,
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
  UserProfileEdit,
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
  // ## slider
  { path: "/admin/slider", element: <AdminSlider /> },
  { path: "/admin/slider/add", element: <AdminAddSlider /> },

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
        path: "home",
        element: <UserProfileHome />
      },
      {
        index: true,
        path: "home/edit",
        element: <UserProfileEdit />
      },
      {
        path: "orders",
        element: <UserProfileOrder />
      },
      {
        path: "orders/:order_id",
        element: <UserProfileOrderSingle />
      },
      {
        path: "address",
        element: <UserProfileAddresses />
      },
      {
        path: "address/add",
        element: <UserProfileAddAddresses />
      },
      {
        path: "address/:address_id",
        element: <UserProfileEditAddresses />
      }
    ]
  },
  {
    path: "/bot",
    element: <BotPanel />,
    children: [
      {
        path: "",
        element: <BotSetting />
      },
      {
        path: "masters",
        element: <BotMasters />
      },
      {
        path: "masters/add",
        element: <BotAddMasters />
      },
      {
        path: "masters/:master_id",
        element: <BotEditMasters />
      }
    ]
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
]);
