/* eslint-disable implicit-arrow-linebreak */
import { TypeBotSetting } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/");
  return data.botData as TypeBotSetting | null;
};
export const useGetBotSetting = () =>
  useQuery<TypeBotSetting | null>(["bot-setting"], fetch);
