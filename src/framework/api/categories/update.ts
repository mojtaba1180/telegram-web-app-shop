/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

const useUpdateCategory = ({ category_id }: { category_id: string | number }) =>
  useMutation({
    mutationKey: [`edit-categories-${category_id}`],
    mutationFn: ({ user_id, category_name, parent_id }: TypePostCategories) =>
      Api.put(`/categories/${category_id}`, {
        user_id,
        category_name,
        parent_id: parent_id || null
      })
  });

export default useUpdateCategory;
