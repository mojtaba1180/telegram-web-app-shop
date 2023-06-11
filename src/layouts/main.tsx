/* eslint-disable camelcase */
/* eslint-disable indent */
import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ConfigProvider, theme } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Main({ children }: Props) {
  const [colorScheme, themeParams] = useThemeParams();
  // const { id } = useTelegramUser();
  // const { data } = useGetUserInfo({ user_Id: id });
  const customizeRenderEmpty = () => (
    <div style={{ textAlign: "center" }}>
      <p>اطلاعاتی موجود نیست</p>
    </div>
  );
  return (
    <div className="app w-full py-1">
      <div className="w-full !max-w-[450px]">
        <ConfigProvider
          direction="rtl"
          locale={fa_IR}
          renderEmpty={customizeRenderEmpty}
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
