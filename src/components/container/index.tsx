import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router";

interface Props {
  title: string;
  children: React.ReactNode;
  backwardUrl?: string | undefined | number;
  customButton?: boolean;
  customButtonTitle?: string;
  customButtonOnClick?: React.MouseEventHandler;
  titleType?: "small" | "default";
}

function Container({
  title,
  children,
  backwardUrl,
  customButton,
  customButtonTitle,
  customButtonOnClick,
  titleType
}: Props) {
  const navigate = useNavigate();

  // eslint-disable-next-line operator-linebreak
  const headerStyle =
    titleType === "default"
      ? "sticky top-1 z-30 flex items-center justify-between gap-1 rounded-lg bg-[var(--tg-theme-secondary-bg-color)] p-3"
      : " z-20 text-sm text-left -mb-2 border-b-[1px] pb-1 ";

  return (
    <div>
      <div className={`transition-all ${headerStyle} `}>
        <p className="m-0 p-0">{title}</p>
        <div className="mr-auto" />
        {customButton && (
          <Button type="primary" ghost onClick={customButtonOnClick}>
            {customButtonTitle}
          </Button>
        )}
        {backwardUrl && (
          <Button type="primary" ghost onClick={() => navigate(backwardUrl)}>
            بازگشت
          </Button>
        )}
      </div>
      <div className="mt-5 w-full">{children}</div>
    </div>
  );
}
Container.defaultProps = {
  backwardUrl: undefined,
  customButton: false,
  customButtonTitle: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  customButtonOnClick: () => {},
  titleType: "default"
};
export default Container;
