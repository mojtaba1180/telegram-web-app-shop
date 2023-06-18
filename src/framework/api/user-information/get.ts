/* eslint-disable camelcase */
import { TypeUserInfo } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

interface QueryProps {
  user_Id: string | number;
}

export const fetch = async ({ queryKey }: any) => {
  const [_key, user_Id] = queryKey;
  const { data } = await Api.get(`/users/${user_Id}/GetUser`);
  return data as TypeUserInfo;
};

// eslint-disable-next-line prettier/prettier
const useGetUserInfo = ({ user_Id }: QueryProps) => useQuery<TypeUserInfo>(["user-info", user_Id], fetch);

export default useGetUserInfo;
