/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeDeleteCartItem } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteCartItem = () =>
  useMutation({
    mutationKey: ["delete-cart-item"],
    mutationFn: ({ user_id, product_id }: TypeDeleteCartItem) =>
      Api.delete(`/carts/${user_id}/${product_id}`)
  });

export default useDeleteCartItem;
