/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostMaster } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateMaster = ({ master_id }: { master_id: string }) =>
  useMutation({
    mutationKey: ["update-master"],
    mutationFn: (props: TypePostMaster) =>
      Api.put(`/master/${master_id}`, props)
  });

export default useUpdateMaster;
