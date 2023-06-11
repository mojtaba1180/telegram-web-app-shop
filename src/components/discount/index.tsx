import useAddDiscounts from "@framework/api/discount/add";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Divider, Form, Input } from "antd";

interface Props {
  type: "product" | "category";
}

function Discount({ type }: Props) {
  const { id } = useTelegramUser();
  const mutation = useAddDiscounts();
  return (
    <div>
      <Divider> تخفیفات </Divider>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        onFinish={() => {}}>
        <Form.Item name="product_name" required label="درصد">
          <Input required />
        </Form.Item>
        <Form.Item name="product_name" required label="قیمت">
          <Input required />
        </Form.Item>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          ghost
          loading={mutation.isLoading}
          // className="sticky bottom-3"
          htmlType="submit">
          ذخیره
        </Button>
      </Form>
    </div>
  );
}

export default Discount;
