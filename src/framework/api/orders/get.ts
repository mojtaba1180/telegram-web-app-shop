/* eslint-disable implicit-arrow-linebreak */
import { TypeOrders } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/orders");
  return data as TypeOrders;
};

export const useGetOrders = () => useQuery<TypeOrders>(["orders"], fetch);
