/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeMasters } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/master");
  return data.masters as TypeMasters[];
};

export const useGetMasters = () => useQuery<TypeMasters[]>(["masters"], fetch);
