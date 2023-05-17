/* eslint-disable implicit-arrow-linebreak */
import { TypeCategories } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/categories");
  return data as TypeCategories;
};

export const useGetCategories = () =>
  useQuery<TypeCategories>(["user-info"], fetch);
