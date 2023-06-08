/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPhotos } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddMasterImage = () =>
  useMutation({
    mutationKey: ["add-Product-image"],
    mutationFn: ({ photo_base64 }: TypeProductPhotos) =>
      Api.post("/master/photo", { photo_base64 })
  });

export default useAddMasterImage;
