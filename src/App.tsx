/* eslint-disable indent */
import "@style/app.scss";
import "antd/dist/reset.css";

import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ConfigProvider, theme } from "antd";

import Router from "./router";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [colorScheme, themeParams] = useThemeParams();
  // eslint-disable-next-line operator-linebreak
  const mode = import.meta.env.VITE_DEV_MODE !== "true";
  // console.log(JSON.parse(sessionStorage.getItem("__telegram__initParams")));
  return (
    <div className=" app w-full  py-1  ">
      <div className="  w-full !max-w-[450px]">
        {mode ? (
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
            <div className="contentWrapper">
              <Router />
            </div>
          </ConfigProvider>
        ) : (
          <>going to telegram</>
        )}
      </div>
    </div>
  );
}

export default App;
