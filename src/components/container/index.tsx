import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router";

interface Props {
  title: string;
  children: React.ReactNode;
  backwardUrl?: string | undefined;
  customButton?: boolean;
  customButtonTitle?: string;
  customButtonOnClick?: React.MouseEventHandler;
}

function Container({
  title,
  children,
  backwardUrl,
  customButton,
  customButtonTitle,
  customButtonOnClick
}: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sticky top-1 z-30 flex items-center justify-between rounded-lg bg-[var(--tg-theme-secondary-bg-color)] p-3   ">
        <h1>{title}</h1>
        {customButton && (
          <Button onClick={customButtonOnClick}>{customButtonTitle}</Button>
        )}
        {backwardUrl && (
          <Button onClick={() => navigate(backwardUrl)}>بازگشت</Button>
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
  customButtonOnClick: () => {}
};
export default Container;
