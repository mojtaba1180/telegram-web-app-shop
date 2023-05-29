/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeDeleteProduct } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteProduct = () =>
  useMutation({
    mutationKey: ["delete-product"],
    mutationFn: ({ user_id, product_id }: TypeDeleteProduct) =>
      Api.delete("/products", {
        data: {
          user_id: `${user_id}`,
          product_id
        }
      })
  });

export default useDeleteProduct;
