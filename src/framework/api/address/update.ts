/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeAddAddress } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddAddress = () =>
  useMutation({
    mutationKey: ["add-address"],
    mutationFn: ({
      address_Id,
      user_id,
      city,
      country,
      state,
      street,
      zipcode
    }: TypeAddAddress) =>
      Api.put(`/users/${user_id}/addresses/${address_Id}`, {
        city,
        country,
        state,
        street,
        zipcode
      })
  });

export default useAddAddress;
