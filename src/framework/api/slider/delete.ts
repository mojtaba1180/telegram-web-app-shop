/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteSlider = () =>
  useMutation({
    mutationKey: ["delete-slider"],
    mutationFn: ({
      master_id,
      user_id
    }: {
      master_id: string;
      user_id: string;
    }) =>
      Api.delete("/main_slider", {
        data: {
          user_Id: `${user_id}`,
          id: master_id
        }
      })
  });

export default useDeleteSlider;
