/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypePostCategories } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useAddCategories = () =>
  useMutation({
    mutationKey: ["add-categories"],
    mutationFn: ({ user_id, category_name, parent_id }: TypePostCategories) =>
      Api.post("/categories", {
        user_id,
        category_name,
        parent_id: parent_id || null
      })
  });

export default useAddCategories;
