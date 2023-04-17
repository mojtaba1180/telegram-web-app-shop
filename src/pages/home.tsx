import useTelegram from "@hooks/useTelegram";
import { Link } from "react-router-dom";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  return (
    <div>
      {/*
      <MainButtonDemo />
      <BackButtonDemo />
      <ShowPopupDemo />
      <HapticFeedbackDemo /> */}
      <Link to="/products/add">AddProduct</Link>
    </div>
  );
}

export default Home;
