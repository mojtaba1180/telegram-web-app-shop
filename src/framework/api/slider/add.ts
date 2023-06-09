/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostSlider } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddSlider = () =>
  useMutation({
    mutationKey: ["add-slider"],
    mutationFn: (props: TypePostSlider) => Api.post("/main_slider", props)
  });

export default useAddSlider;
