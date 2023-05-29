/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPost } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddProduct = () =>
  useMutation({
    mutationKey: ["add-Product"],
    mutationFn: (props: TypeProductPost) => Api.post("/products", props)
  });

export default useAddProduct;
