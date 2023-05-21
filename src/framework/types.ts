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
export interface TypeCategories {
  category_Id: string | number;
  category_Name: string | number;
  parent_Id: string | number;
  children: Array<TypeCategories>;
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
// ## photos
export interface TypeProductPhotos {
  photo_base64: string;
}
