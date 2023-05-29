/* eslint-disable implicit-arrow-linebreak */
import { TypeCategories } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/categories");
  return data.categories as TypeCategories[] | null;
};

export const useGetCategories = () =>
  useQuery<TypeCategories[] | null>(["user-info"], fetch);
