/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeProductPost } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateProduct = ({ product_id }: { product_id: string | number }) =>
  useMutation({
    mutationKey: ["update-Product"],
    mutationFn: (props: TypeProductPost) =>
      Api.put(`/products/${product_id}`, props)
  });

export default useUpdateProduct;
