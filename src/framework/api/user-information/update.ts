/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostUserInfo } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateUser = ({ user_id }: { user_id: string | number }) =>
  useMutation({
    mutationKey: ["update-user"],
    mutationFn: (props: TypePostUserInfo) => Api.put(`/users/${user_id}`, props)
  });

export default useUpdateUser;
