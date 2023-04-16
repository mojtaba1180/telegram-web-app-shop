import "@style/index.css";

import { createRoot } from "react-dom/client";
import { TelegramWebApp } from "react-telegram-webapp";

import App from "./App";

async function validateHash(hash: string) {
  const response = await fetch("/api/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ hash })
  });

  return response.ok;
}
createRoot(document.getElementById("root") as HTMLElement).render(
  <TelegramWebApp validateHash={validateHash}>
    <App />
  </TelegramWebApp>
);
