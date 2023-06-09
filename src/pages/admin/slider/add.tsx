/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import Container from "@components/container";
import useAddSliderImage from "@framework/api/photos-upload/add-slider";
import useAddSlider from "@framework/api/slider/add";
import useTelegramUser from "@hooks/useTelegramUser";
import { Button, Form, Input, message, Spin } from "antd";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router";

const { TextArea } = Input;
function Add() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [priceEnterd, setPriceEnterd] = useState<number>(0);
  const mutation = useAddSlider();
  const mutationUploadPhotos = useAddSliderImage();
  const { id } = useTelegramUser();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [imageLinkList, setImageLinkList] = useState<Array<string>>([]);
  const [images, setImages] = useState([]);
  const onChangeImage = async (imageList) => {
    // data for submit
    imageList.length &&
      (await imageList.map(async (i: { data_url: string }) => {
        mutationUploadPhotos.mutate(
          { photo_base64: i.data_url.split(",")[1] },
          {
            onSuccess: (e) => {
              setImageLinkList([...imageLinkList, `${e.data}`]);
            },
            onError: () => {
              message.error("افزودن عکس با مشکل مواجه شد");
            }
          }
        );
      }));
    setImages(imageList);
  };
  const handleRemoveSingleImage = (idx) => {
    const arr = [...imageLinkList];
    if (idx !== -1) {
      arr.splice(idx, 1);
      setImageLinkList(arr);
    }
  };

  return (
    <Container backwardUrl={-1} title="افزودن اساتید جدید">
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        disabled={componentDisabled}
        onFinish={({
          url,
          photo_Path
        }: {
          url: string;
          photo_Path: string;
        }) => {
          mutation.mutate(
            {
              url: url || "",
              photo_Path: imageLinkList.toString() || "",
              user_Id: id.toString()
            },
            {
              onSuccess: () => {
                message.success(" استاد شما با موفقیت ثبت شد");
                form.resetFields();
                navigate(-1);
              },
              onError: (err) => {
                // console.log(err)
                message.error(err?.response?.data?.title);
              }
            }
          );
        }}>
        <Form.Item name="url" label=" لینک ">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
        <Form.Item
          className="mb-14 w-full"
          name="photos"
          label="عکس"
          valuePropName="photos">
          {mutationUploadPhotos.isLoading ? (
            <Spin spinning />
          ) : (
            <ImageUploading
              value={images}
              onChange={onChangeImage}
              maxNumber={1}
              dataURLKey="data_url">
              {({
                onImageUpload,
                onImageRemoveAll,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
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
                    &nbsp;
                    <button
                      className="h-full w-20 bg-red-600 "
                      type="button"
                      onClick={() => {
                        onImageRemoveAll();
                        setImageLinkList([]);
                      }}>
                      حذف همه
                    </button>
                  </div>
                  <div className="grid h-[240px] w-full grid-cols-2 grid-rows-2  gap-y-7 overflow-x-auto overflow-y-scroll  ">
                    {imageLinkList?.map((image, index) => (
                      <div key={index} className=" h-24 w-36 rounded-lg">
                        <img
                          src={`${import.meta.env.VITE_API_URL}/${image}`}
                          alt=""
                          className="h-full w-full rounded-lg "
                        />
                        <div className="flex justify-between gap-3">
                          <Button
                            danger
                            className="w-full"
                            htmlType="button"
                            onClick={() => {
                              handleRemoveSingleImage(index);
                              // onImageRemove(index)
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
          )}
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
    </Container>
  );
}

export default Add;
