/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeSingleOrder } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key, order_Id] = queryKey;
  console.log("getttttt");
  const { data } = await Api.get(`/orders/${order_Id}`);
  return data as TypeSingleOrder;
};

export const useGetOrderById = ({ order_Id }: { order_Id: string }) =>
  useQuery<TypeSingleOrder>([`order-${order_Id}`, order_Id], fetch);
