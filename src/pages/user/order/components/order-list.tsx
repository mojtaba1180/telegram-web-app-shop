// eslint-disable-next-line object-curly-newline
import { Order } from "@framework/types";
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
        className="demo-loadmore-list"
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
            <div>
              {" "}
              <span>{item.final_Price}</span> تومان
            </div>
          </List.Item>
        )}
      />
      <Divider> مجموع قیمت </Divider>
      550000 تومان
    </>
  );
}

export default OrderList;
