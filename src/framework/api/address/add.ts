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
      city,
      country,
      state,
      street,
      zipcode,
      user_Id
    }: TypeAddAddress) =>
      Api.post(`/users/${user_Id}/addresses`, {
        city,
        country,
        state,
        street,
        zipcode
      })
  });

export default useAddAddress;
