/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostMaster } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddMaster = () =>
  useMutation({
    mutationKey: ["add-master"],
    mutationFn: (props: TypePostMaster) => Api.post("/master", props)
  });

export default useAddMaster;
