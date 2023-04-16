import "@style/index.css";

import { createRoot } from "react-dom/client";

import App from "./App";
import { TelegramType } from "./types";

declare global {
  interface Window {
    Telegram: TelegramType;
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
