import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ConfigProvider, theme } from "antd";

import BackButtonDemo from "@/components/BackButtonDemo";
import HapticFeedbackDemo from "@/components/HapticFeedbackDemo";
import MainButtonDemo from "@/components/MainButtonDemo";
import ShowPopupDemo from "@/components/ShowPopupDemo";
import useTelegram from "@/hooks/useTelegram";

function Home() {
  const tgApp = useTelegram();
  const [colorScheme, themeParams] = useThemeParams();
  // const userId = tgApp.initDataUnsafe.user.id;
  return (
    <div>
      <ConfigProvider
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
        <header className="App-header">
          <img src="/vite.svg" className="App-logo" alt="logo" />
        </header>
        <div className="contentWrapper">
          <input
            type="file"
            className="changeimage"
            id="changeimage"
            accept="image/*"
          />
          <MainButtonDemo />
          <BackButtonDemo />
          <ShowPopupDemo />
          <HapticFeedbackDemo />
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Home;
