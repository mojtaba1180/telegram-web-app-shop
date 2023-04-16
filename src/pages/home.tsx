import { useTelegramWebApp } from "react-telegram-webapp";

function Home() {
  const tgApp = useTelegramWebApp();
  const userID = tgApp.initData.user.id;
  return <div>userID</div>;
}

export default Home;
