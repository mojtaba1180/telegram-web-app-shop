import { TypeUserInfo } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

interface QueryProps {
  userId: string | number;
}

export const fetch = async ({ queryKey }: any) => {
  const [_key, userId] = queryKey;
  const { data } = await Api.get(`/users/${userId}/GetUser`);
  return data as TypeUserInfo;
};

// eslint-disable-next-line prettier/prettier
const useGetUserInfo = ({ userId }: QueryProps) => useQuery<TypeUserInfo>(["user-info", userId], fetch);

export default useGetUserInfo;
