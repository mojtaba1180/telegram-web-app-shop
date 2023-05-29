/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeClearCart } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useClearCart = () =>
  useMutation({
    mutationKey: ["clear-cart"],
    mutationFn: ({ user_id }: TypeClearCart) =>
      Api.delete(`/carts/${user_id}/clear`)
  });

export default useClearCart;
