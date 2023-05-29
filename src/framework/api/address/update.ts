/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeAddAddress } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateAddress = () =>
  useMutation({
    mutationKey: ["update-address"],
    mutationFn: ({
      address_Id,
      user_Id,
      city,
      country,
      state,
      street,
      zipcode
    }: TypeAddAddress) =>
      Api.put(`/users/${user_Id}/addresses/${address_Id}`, {
        city,
        country,
        state,
        street,
        zipcode
      })
  });

export default useUpdateAddress;
