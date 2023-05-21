/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeDeleteCategories } from "@framework/types";
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useDeleteCategories = () =>
  useMutation({
    mutationKey: ["delete-category"],
    mutationFn: ({ user_id, category_id }: TypeDeleteCategories) =>
      Api.delete(`/categories/${category_id}?user_id=${user_id}`)
  });

export default useDeleteCategories;
