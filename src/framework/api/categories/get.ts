/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeCategories } from "@framework/types";
import { useQuery } from "@tanstack/react-query";
import qs from "query-string";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key, category_id] = queryKey;
  const { data } = await Api.get(
    `/categories?${qs.stringify({ category_id })}`
  );
  return data.categories as TypeCategories[] | null;
};

export interface Props {
  category_id?: number | string;
}

export const useGetCategories = ({ category_id }: Props) =>
  useQuery<TypeCategories[] | null>(["user-info", category_id], fetch);
