import "@style/app.scss";

import useTelegram from "./hooks/useTelegram";
import Router from "./router";

function App() {
  const tgApp = useTelegram();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  console.log(tgApp?.ready());

  // eslint-disable-next-line operator-linebreak
  const mode = import.meta.env.VITE_DEV_MODE === "true" ? true : tgApp?.ready();
  return (
    <div className=" app h-screen w-full  py-7 ">
      <div className="h-full w-full !max-w-[450px]">
        {mode ? <Router /> : <>agha boro ba telegram biya farbod</>}
      </div>
    </div>
  );
}

export default App;
