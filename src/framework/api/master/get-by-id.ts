/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypePostMaster } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

interface Props {
  master_id: number | string;
}
const fetch = async ({ queryKey }: any) => {
  const [_key, master_id] = queryKey;
  const { data } = await Api.get(`/master/${master_id}`);
  return data.master as TypePostMaster;
};

export const useGetMasterById = ({ master_id }: Props) =>
  useQuery<TypePostMaster>([`master-by-id-${master_id}`, master_id], fetch);
