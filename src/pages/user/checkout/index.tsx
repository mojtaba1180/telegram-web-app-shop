/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import Container from "@components/container";
import { useGetAddresses } from "@framework/api/address/get";
import useAddOrder from "@framework/api/orders/add";
import useAddReceiptPhotos from "@framework/api/receipt-photos/add";
import useTelegramUser from "@hooks/useTelegramUser";
import { Alert, Button, Form, Input, message, Select } from "antd";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { useLocation, useNavigate } from "react-router";

function Checkout() {
  const [images, setImages] = useState([]);
  const [receiptPhoto, setReceiptPhoto] = useState<null | string>(null);
  const { id } = useTelegramUser();
  const { state: locState } = useLocation();
  const navigate = useNavigate();
  const mutationPhotos = useAddReceiptPhotos();
  const mutationOrder = useAddOrder();
  const onChangeImage = async (imageList) => {
    setImages(imageList);
    imageList.length &&
      mutationPhotos.mutate(
        {
          photo_base64: imageList[0].data_url.split(",")[1]
        },
        {
          onSuccess: (e) => {
            setImages(imageList);
            setReceiptPhoto(`${import.meta.env.VITE_API_URL}/${e.data}`);
          },
          onError: () => {
            message.error("در اپلود عکس مشکلی پیش آمده لطفا دوباره تلاش کنید!");
          }
        }
      );
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const { data, isFetching, isLoading } = useGetAddresses(id);
  console.log(locState);
  useEffect(() => {
    if (!locState) {
      navigate("/cart");
    }
  }, [locState]);
  return (
    <Container title="پرداخت سفارش و ثبت" backwardUrl={-1}>
      <div>
        <Alert
          message="آپلود عکس رسید پرداخت شده ضروری میباشد. بعد از اپلود میتوانید ثبت سفارش کنید"
          type="warning"
          showIcon
        />

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={(val) => {
            if (receiptPhoto) {
              mutationOrder.mutate(
                {
                  order_Description: val.order_Description,
                  shipping_Cost: locState.cart_id,
                  receipt_Photo_Path: receiptPhoto,
                  user_Address_Id: val.address,
                  user_Id: `${id}`
                },
                {
                  onSuccess: () => {
                    message.success(
                      "سفارش شما با موفقیت ثبت شد از حساب کار بری میتوانید سفارش خود را دنبال کنید."
                    );
                    navigate("/");
                  }
                }
              );
            } else {
              message.error("لطفا عکس رسید پرداخت خود را وارد کنید.");
            }
          }}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            className="mb-14 w-full"
            name="photos"
            label=" عکس رسید پرداخت"
            required
            valuePropName="photos">
            <ImageUploading
              multiple
              value={images}
              onChange={onChangeImage}
              maxNumber={1}
              dataURLKey="data_url">
              {({ onImageUpload, onImageRemove, isDragging, dragProps }) => (
                // write your building UI
                <div className="upload__image-wrapper flex flex-col">
                  <div className="mb-5 flex h-[60px]  w-full">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      type="button"
                      className="h-full w-full border-[1px] border-dashed"
                      {...dragProps}>
                      افزودن عکس
                    </button>
                  </div>
                  <div className="grid h-fit w-full grid-cols-1 grid-rows-1  gap-y-7   ">
                    {images?.map((image, index) => (
                      <div
                        key={index}
                        className=" flex h-full w-full flex-col gap-2 rounded-lg">
                        <img
                          src={image.data_url}
                          alt=""
                          className="h-full w-full rounded-lg "
                        />
                        <div className="flex justify-between gap-3">
                          <Button
                            danger
                            className="w-full"
                            htmlType="button"
                            onClick={() => {
                              onImageRemove(index);
                              setReceiptPhoto(null);
                            }}>
                            حذف
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </Form.Item>

          <Form.Item name="address" label="آدرس" rules={[{ required: true }]}>
            <Select
              loading={isFetching || isLoading}
              placeholder="آدرس خود را انتخاب کنید"
              allowClear>
              {data?.addresses.map((item) => (
                <Select.Option value={item.address_Id}>
                  {item.country},{item.state},{item.city},{item.street},
                  {item.zipcode} ...
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="order_Description" label="اطلاعات تکمیلی">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Button
            disabled={images.length === 0}
            loading={mutationOrder.isLoading}
            type="default"
            className="w-full"
            size="large"
            htmlType="submit">
            ثبت سفارش
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Checkout;
