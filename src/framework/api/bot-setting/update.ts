/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeUpdateBotSetting } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateBotSetting = () =>
  useMutation({
    mutationKey: ["edit-bot-setting"],
    mutationFn: (props: TypeUpdateBotSetting) => Api.put("/", props)
  });

export default useUpdateBotSetting;
