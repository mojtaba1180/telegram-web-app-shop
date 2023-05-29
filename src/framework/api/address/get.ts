/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeAddresses } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key, user_id, address_id] = queryKey;
  const { data } = await Api.get(
    `/users/${user_id}/addresses${address_id ? `?address_id=${address_id}` : ""
    }`
  );
  return data as TypeAddresses | null;
};

export const useGetAddresses = (
  user_id: string,
  address_id?: string | number | undefined | null
) =>
  useQuery<TypeAddresses | null>(
    ["user-addresses", user_id, address_id],
    fetch
  );
