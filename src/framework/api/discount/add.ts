/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostDiscount } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddDiscounts = () =>
  useMutation({
    mutationKey: ["add-discount"],
    mutationFn: (props: TypePostDiscount) => Api.post("/discounts", props)
  });

export default useAddDiscounts;
