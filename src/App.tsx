import "@style/app.scss";

import {
  useIsTelegramWebAppReady,
  useTelegramWebApp
} from "react-telegram-webapp";

import Router from "./router";

function App() {
  const isReady = useIsTelegramWebAppReady();
  const tgApp = useTelegramWebApp();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line operator-linebreak
  const mode = import.meta.env.VITE_DEV_MODE === "true" ? true : isReady;
  return (
    <div className=" app h-screen w-full  py-7 ">
      <div className="h-full w-full !max-w-[450px]">
        {mode ? <Router /> : <>agha boro ba telegram biya farbod</>}
      </div>
    </div>
  );
}

export default App;
