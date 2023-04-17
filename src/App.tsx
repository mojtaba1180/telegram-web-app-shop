import "@style/app.scss";

import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ConfigProvider } from "antd";

import Router from "./router";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [colorScheme, themeParams] = useThemeParams();
  // eslint-disable-next-line operator-linebreak
  const mode = import.meta.env.VITE_DEV_MODE !== "true";
  return (
    <div className=" app h-screen w-full  py-7 ">
      <div className="h-full w-full !max-w-[450px]">
        {mode ? (
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
