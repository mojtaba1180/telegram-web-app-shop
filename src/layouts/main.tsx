/* eslint-disable indent */
import useGetUserInfo from "@framework/user-information";
import useTelegramUser from "@hooks/useTelegramUser";
import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ConfigProvider, theme } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Main({ children }: Props) {
  const [colorScheme, themeParams] = useThemeParams();
  const { id } = useTelegramUser();
  const { data } = useGetUserInfo({ userId: id });
  console.log(data);

  return (
    <div className="app w-full py-1">
      <div className="w-full !max-w-[450px]">
        <ConfigProvider
          direction="rtl"
          theme={
            themeParams.text_color
              ? {
                  algorithm:
                    colorScheme === "dark"
                      ? theme.darkAlgorithm
                      : theme.defaultAlgorithm,
                  token: {
                    colorText: themeParams.text_color,
                    colorPrimary: themeParams.button_color,
                    colorBgBase: themeParams.bg_color
                  }
                }
              : undefined
          }>
          {/* <header className="App-header">
              <img src="/vite.svg" className="App-logo" alt="logo" />
            </header> */}
          <div className="contentWrapper">{children}</div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Main;
