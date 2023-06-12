/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Order } from "@framework/types";
import { List } from "antd";
import moment from "jalali-moment";

interface Props {
  orders: Order | undefined;
}
function CustomerDetail({ orders }: Props) {
  return (
    <List className="w-full" bordered>
      <List.Item>
        <List.Item.Meta
          title="عکس رسید پرداخت :"
          description={
            <div className="flex w-full items-center justify-center">
              <img
                className="h-fit min-h-[120px]"
                src={
                  `${import.meta.env.VITE_API_URL}/${orders?.receipt_Photo}` ||
                  ""
                }
                alt="receipt-photo"
              />
            </div>
          }
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          title="نام کاربر:"
          description={orders?.user_Full_Name || "ندارد"}
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          title="آدرس:"
          description={`${orders?.full_Address || ""}`}
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          title="کد رهگیری:"
          description={<div>{orders?.tracking_Code || "ثبت نشده"}</div>}
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          title="تاریخ سفارش:"
          description={
            <div>
              <span>شمسی : </span>{" "}
              {moment(orders?.order_Date).locale("fa").format("YYYY/MM/DD") ||
                ""}
              <br />
              <span>میلادی : </span>{" "}
              {moment(orders?.order_Date).locale("en").format("YYYY/MM/DD") ||
                ""}
            </div>
          }
        />
      </List.Item>
    </List>
  );
}

export default CustomerDetail;
