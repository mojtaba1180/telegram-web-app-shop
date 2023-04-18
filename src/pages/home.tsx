import useTelegram from "@hooks/useTelegram";
import { Link } from "react-router-dom";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  return (
    <div className="flex flex-col gap-4">
      {/*
      <MainButtonDemo />
      <BackButtonDemo />
      <ShowPopupDemo />
      <HapticFeedbackDemo /> */}
      <Link to="/products/add">AddProduct</Link>
      <Link to="/categories">categories</Link>
    </div>
  );
}

export default Home;
