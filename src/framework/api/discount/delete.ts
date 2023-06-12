/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteDiscount = () =>
  useMutation({
    mutationKey: ["delete-discount"],
    mutationFn: ({
      discount_id,
      user_id
    }: {
      discount_id: string;
      user_id: string;
    }) => Api.delete(`/discounts/${discount_id}?user_id=${user_id}`)
  });

export default useDeleteDiscount;
