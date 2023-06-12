/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeUpdateOrder } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateOrder = ({ order_id }: { order_id: string }) =>
  useMutation({
    mutationKey: ["update-order"],
    mutationFn: (props: TypeUpdateOrder) =>
      Api.put(`/orders/${order_id}`, props)
  });

export default useUpdateOrder;
