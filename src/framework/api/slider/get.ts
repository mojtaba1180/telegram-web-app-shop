/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { TypeSlider } from "@framework/types";
import { useQuery } from "@tanstack/react-query";

import Api from "../utils/api-config";

const fetch = async ({ queryKey }: any) => {
  const [_key] = queryKey;
  const { data } = await Api.get("/main_slider");
  return data.sliders as TypeSlider[];
};

export const useGetSliders = () => useQuery<TypeSlider[]>(["masters"], fetch);
