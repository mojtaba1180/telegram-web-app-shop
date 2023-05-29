/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeDeleteAddressItem } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteAddress = () =>
  useMutation({
    mutationKey: ["delete-address-item"],
    mutationFn: ({ user_id, address_id }: TypeDeleteAddressItem) =>
      Api.delete(`/users/${user_id}/addresses/${address_id}`)
  });

export default useDeleteAddress;
