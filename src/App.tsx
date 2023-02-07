import "@style/app.scss";

import Counter from "@component/counter";
import ReactLogo from "@image/logo.svg";

function App() {
  return (
    <div className="app bg-gray-900">
      <div className="box flex h-[24rem] w-5/6 max-w-3xl rounded-xl bg-gray-800/80 p-5 shadow-lg">
        <div className="flex w-2/5 items-center justify-center">
          <img className="app-logo" src={ReactLogo} alt="ReactLogo" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-5 p-2">
          <div className="space-y-5">
            <h1 className="text-2xl font-black">Giga React Starter 🗿</h1>
            <h1 className="text-xl font-bold">
              Vite + React + Typescript + Tailwind + Eslint + Stylelint & Prettier 🔥
            </h1>
          </div>

          <Counter />

          <div className="links flex gap-1 text-sm">
            <a href="https://beta.reactjs.org/">Learn React</a>

            <span>|</span>

            <a href="https://vitejs.dev/guide/">Learn Vite</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
