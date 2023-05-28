/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPhotos } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddProductImage = () =>
  useMutation({
    mutationKey: ["add-Product-image"],
    mutationFn: ({ photo_base64 }: TypeProductPhotos) =>
      Api.post("/product_photos", { photo_base64 })
  });

export default useAddProductImage;
