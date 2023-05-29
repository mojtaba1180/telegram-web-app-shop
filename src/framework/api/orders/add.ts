/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeOrderPost } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddOrder = () =>
  useMutation({
    mutationKey: ["add-Order"],
    mutationFn: ({
      user_Id,
      order_Description,
      receipt_Photo_Path,
      shipping_Cost,
      user_Address_Id
    }: TypeOrderPost) =>
      Api.post("/orders", {
        user_Id,
        order_Description,
        receipt_Photo_Path,
        shipping_Cost,
        user_Address_Id
      })
  });

export default useAddOrder;
