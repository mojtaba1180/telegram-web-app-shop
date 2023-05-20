/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPhotos } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddProduct = () =>
  useMutation({
    mutationKey: ["add-Product"],
    mutationFn: ({ photo_base64 }: TypeProductPhotos) =>
      Api.post("/products", { photo_base64 })
  });

export default useAddProduct;
