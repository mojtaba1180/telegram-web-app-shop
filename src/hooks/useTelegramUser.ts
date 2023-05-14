import qs from "query-string";

interface TGUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}
export interface TypeTGWebAppData {
  auth_date: string;
  hash: string;
  query_id: string;
  user: TGUser;
}
const useTelegramUser = () => {
  const { tgWebAppData } = JSON.parse(
    sessionStorage.getItem("__telegram__initParams") || ""
  );
  const TGparse = qs.parse(tgWebAppData);
  const user: TGUser = JSON.parse(TGparse.user);

  return user;
};
export default useTelegramUser;
