/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { Product } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

interface Props {
  product_id: number | string;
}
const fetch = async ({ queryKey }: any) => {
  const [_key, product_id] = queryKey;
  const { data } = await Api.get(`/products/${product_id}`);
  return data as Product;
};

export const useGetProductsById = ({ product_id }: Props) =>
  useQuery<Product>([`product-by-id-${product_id}`, product_id], fetch);
