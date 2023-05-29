/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeAddToCart } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddToCart = () =>
  useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: ({ user_id, cart_items }: TypeAddToCart) =>
      Api.put("/carts", {
        user_id,
        cart_items
      })
  });

export default useAddToCart;
