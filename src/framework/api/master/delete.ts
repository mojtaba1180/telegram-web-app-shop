/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteMaster = () =>
  useMutation({
    mutationKey: ["delete-master"],
    mutationFn: ({
      master_id,
      user_id
    }: {
      master_id: string;
      user_id: string;
    }) =>
      Api.delete("/master", {
        data: {
          user_Id: `${user_id}`,
          id: master_id
        }
      })
  });

export default useDeleteMaster;
