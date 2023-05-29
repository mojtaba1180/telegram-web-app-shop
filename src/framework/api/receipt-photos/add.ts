/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPhotos } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddReceiptPhotos = () =>
  useMutation({
    mutationKey: ["add-receipt-photos"],
    mutationFn: ({ photo_base64 }: TypeProductPhotos) =>
      Api.post("/receipt_photos", { photo_base64 })
  });

export default useAddReceiptPhotos;
