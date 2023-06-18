// discount
export interface TypePostDiscount {
  user_id: string;
  discount_type: "percent" | "price";
  discount_value: number;
  discount_start_date: string;
  discount_end_date: string;
  product_id: number | null;
  category_id: number | null;
}
export interface TypeDiscount {
  category_Id: null;
  discount_End_Date: string;
  discount_Id: number;
  discount_Start_Date: string;
  discount_Type: "percent" | "price";
  discount_Value: number;
  product_Id: number;
  discountedPrice: number;
}
export interface TypeUpdateDiscount extends TypePostDiscount {
  discount_Id: number;
}
export interface TypeUserInfo {
  user_Id: string;
  name: string;
  last_Name: string;
  username: string;
  email: null;
  phone_Number: null;
  role: string;
  created_At: string;
  updated_At: string;
}
export interface TypePostUserInfo {
  name: string;
  last_name: string;
  username: string;
  email: null;
  phone_number: null;
}
export interface TypeCategories {
  category_Id: string | number;
  category_Name: string | number;
  parent_Id: string | number;
  children: Array<TypeCategories>;
  discount: TypeDiscount | null;
}

export interface TypePostCategories {
  user_id: string;
  category_name: string;
  parent_id: number | string | undefined;
}
export interface TypeDeleteCategories {
  user_id: string;
  category_id: string;
}
// order lists
export interface OrderItem {
  order_Item_Id: number;
  order_Id: number;
  product_Id: number;
  product_Name: string;
  tag_Price: number;
  final_Price: number;
  quantity: number;
}

export interface Order {
  order_Id: number;
  user_Id: string;
  user_Address_Id: number;
  full_Address: string;
  shipping_cost: number;
  total_Price: number;
  order_Description: string;
  user_Full_Name: string;
  receipt_Photo: string;
  order_Status: string;
  tracking_Code: string;
  order_Date: string;
  updated_At: string;
  order_Items: OrderItem[];
}

export interface TypeOrders {
  page: number;
  limit: number;
  totalRows: number;
  orders: Order[];
}
// order post request type
export interface TypeOrderPost {
  user_Id: string;
  user_Address_Id: number;
  shipping_Cost: number;
  order_Description: string;
  receipt_Photo_Path: string;
}

export interface TypeUpdateOrder {
  user_Id: string;
  order_Status: string;
  tracking_Code: string;
}
// order single page type
export interface TypeSingleOrder {
  success: boolean;
  message: string;
  order: Order;
}

// Products

export interface Product {
  product_Id: number;
  product_Name: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  description?: string;
  categoryIds: Array<number | string>;
  photo_path: string;
  updated_At: string;
  discount: TypeDiscount | null;
}
export interface TypeListProducts {
  page: number;
  limit: number;
  totalRows: number;
  products: Product[];
}

// ## Add
export interface TypeProductPost {
  user_id: string;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category_ids: number[];
  photos: string[];
}

export interface TypeDeleteProduct {
  user_id: string;
  product_id: string;
}

// ## photos
export interface TypeProductPhotos {
  photo_base64: string;
}

// Cart

export interface TypeAddToCartItems {
  product_id: number;
  quantity: number;
}
export interface TypeCartItems {
  quantity: number;
  product_Id: number;
  cart_Item_Id: number;
  cart_Id: number;
  product_Name: string;
  price: number;
  discountedPrice: number;
}
export interface TypeCarts {
  cart_Id: number;
  user_Id: string;
  totalPrice: number;
  cartItems: Array<TypeCartItems>;
}
export interface TypeAddToCart {
  user_id: string;
  cart_items: TypeAddToCartItems[];
}
export interface TypeClearCart {
  user_id: string;
}
export interface TypeDeleteCartItem {
  user_id: string;
  product_id: string | number;
}

export interface TypeAddressItems {
  address_Id?: number;
  user_Id?: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zipcode: string;
}
export interface TypeAddAddress extends TypeAddressItems {
  user_id: string;
}

export interface TypeAddresses {
  addresses: TypeAddressItems[];
}

export interface TypeDeleteAddressItem {
  user_id: string;
  address_id: string | number;
}
// Bot Setting
export interface TypeUpdateBotSetting {
  user_id: string;
  welcome_message: string;
  about_us: string;
  contact_us: string;
}

export interface TypeBotSetting {
  bot: null | string;
  id: number;
  owner_id: string;
  owner_last_name: string;
  owner_phone_number: string;
  owner_national_code: string;
  shop_name: string;
  bot_username: string;
  bot_token: string;
  active: boolean;
  welcome_message: string;
  user_profile: string;
  user_cart: string;
  user_order: string;
  admin_panel: string;
  about_us: string;
  contact_us: string;
  bot_settings: string;
  special: boolean;
}

export interface TypePostMaster {
  user_Id: string;
  name: string;
  last_Name: string;
  description: string;
  photo_Path: string;
}
export interface TypeMasters {
  id: string;
  name: string;
  last_Name: string;
  description: string;
  photo_Path: string;
}
export interface TypePostSlider {
  photo_Path: string;
  url: string;
  user_Id: string;
}
export interface TypeSlider {
  id: string;
  photo_Path: string;
  url: string;
}
