/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { useMutation } from "@tanstack/react-query";

import Api from "../utils/api-config";

interface QueryProps {
  user_id: string;
  category_name: string;
  parent_id: number | string | undefined;
}

const useAddCategories = () =>
  useMutation({
    mutationKey: ["add-categories"],
    mutationFn: ({ user_id, category_name, parent_id }: QueryProps) =>
      Api.post("/categories", {
        user_id,
        category_name,
        parent_id: parent_id || 0
      })
  });

export default useAddCategories;
