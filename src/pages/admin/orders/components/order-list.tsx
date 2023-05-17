// eslint-disable-next-line object-curly-newline
import { Order } from "@framework/types";
import { Divider, List } from "antd";
import { Link } from "react-router-dom";

interface Props {
  isLoading: boolean;
  order: Order | undefined;
}

function OrderList({ isLoading, order }: Props) {
  // eslint-disable-next-line operator-linebreak
  const orderItems = order?.order_Items || [];
  return (
    <>
      <List
        className="demo-loadmore-list"
        loading={isLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={orderItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Link to={`/products/${item.product_Id}`}>
                  {item.product_Name}
                </Link>
              }
            />
            <div>{item.tag_Price}</div>
            <div>
              {item.final_Price}
              تومان
            </div>
          </List.Item>
        )}
      />
      <Divider> مجموع قیمت </Divider>
      <div>{order?.total_Price}</div>
    </>
  );
}

export default OrderList;
