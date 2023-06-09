/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPhotos } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddSliderImage = () =>
  useMutation({
    mutationKey: ["add-main_slider-image"],
    mutationFn: ({ photo_base64 }: TypeProductPhotos) =>
      Api.post("/main_slider/photo", { photo_base64 })
  });

export default useAddSliderImage;
