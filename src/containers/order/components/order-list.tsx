/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line object-curly-newline
import { Order } from "@framework/types";
import { addCommas } from "@persian-tools/persian-tools";
import { Divider, List } from "antd";
import { Link } from "react-router-dom";

interface Props {
  loading: boolean;
  orders: Order | undefined;
}

function OrderList({ loading, orders }: Props) {
  return (
    <>
      <List
        loading={loading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={orders?.order_Items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link to={`/products/${item.product_Id}`}>
                  {item.product_Name}
                </Link>
              }
            />

            <div className="flex gap-3">
              <div>
                <span>{addCommas(item.quantity || 0)}</span> <span>عدد</span>
              </div>
              <div>
                <span>{addCommas(item.final_Price || 0)}</span>{" "}
                <span>تومان</span>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Divider> مجموع قیمت </Divider>
      <div>
        <span>{addCommas(orders?.total_Price || 0)}</span> <span>تومان</span>
      </div>
    </>
  );
}

export default OrderList;
