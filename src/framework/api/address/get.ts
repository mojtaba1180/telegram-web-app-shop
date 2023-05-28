/* eslint-disable semi */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
import { TypeAddresses } from "@framework/types"
import { useQuery } from "@tanstack/react-query"

import Api from "../utils/api-config"

const fetch = async ({ queryKey }: any) => {
  const [_key, user_id] = queryKey
  const { data } = await Api.get(`/users/${user_id}/addresses`)
  return data as TypeAddresses | null
}

export const useGetCategories = (user_id: string) =>
  useQuery<TypeAddresses | null>(["user-addresses", user_id], fetch)
