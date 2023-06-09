/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeSingleOrder } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key, user_id] = queryKey;

  const { data } = await Api.get(`/orders/user/${user_id}`);
  return data as TypeSingleOrder;
};

export const useGetOrderByUser = ({ user_id }: { user_id: string }) =>
  useQuery<TypeSingleOrder>([`order-user-${user_id}`, user_id], fetch);
