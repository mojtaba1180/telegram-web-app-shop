/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeUpdateDiscount } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateDiscount = ({ discount_id }: { discount_id: string | number }) =>
  useMutation({
    mutationKey: ["update-discount"],
    mutationFn: (props: TypeUpdateDiscount) =>
      Api.put(`/discounts/${discount_id}`, props)
  });

export default useUpdateDiscount;
