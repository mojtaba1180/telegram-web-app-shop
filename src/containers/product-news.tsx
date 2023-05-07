import Card from "@components/product/card";
import { Divider } from "antd";

function ProductNews() {
  return (
    <div className="flex flex-col  gap-3">
      <div>محصولات جدید ما</div>
      <Divider className="my-0 p-0" />
      <div className="grid grid-cols-2  gap-2">
        {[...Array(5)].map((item, idx) => (
          <Card key={`p-${idx}`} url="/products/11" />
        ))}
      </div>
    </div>
  );
}

export default ProductNews;
