/* eslint-disable react/jsx-one-expression-per-line */

import useGetUserInfo from "@framework/api/user-information/get";

/* eslint-disable camelcase */
interface Props {
  user_id: string;
  address: string;
  tracking_code: string;
}
function CustomerDetail({ user_id, address, tracking_code }: Props) {
  const { data, isLoading } = useGetUserInfo({ user_Id: user_id });
  if (isLoading) return <>Loading...</>;
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex gap-3">
        نام:
        <span>
          {" "}
          {data?.name} {data?.last_Name}{" "}
        </span>
      </div>
      <div className="flex gap-3">
        آدرس:
        <span>{address}</span>
      </div>
      <div className="flex gap-3">
        اطلاعات تماس:
        <span> {data?.phone_Number} </span>
      </div>
      <div className="flex gap-3">
        کد پیگیری :<span> {tracking_code} </span>
      </div>

      <div className="flex gap-3">
        ID تلگرام:
        <span>
          <a href={`https://t.me/${data?.username}`}>{data?.username}</a>
        </span>
      </div>
    </div>
  );
}

export default CustomerDetail;
