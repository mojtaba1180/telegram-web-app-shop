/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeCarts } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key, user_id] = queryKey;
  const { data } = await Api.get(`/carts/${user_id}`);
  return data.cart as TypeCarts | null;
};

export const useGetCarts = (user_id: string) =>
  useQuery<TypeCarts | null>(["carts", user_id], fetch);
