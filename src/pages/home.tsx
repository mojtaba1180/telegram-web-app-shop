import BackButtonDemo from "@component/BackButtonDemo";
import HapticFeedbackDemo from "@component/HapticFeedbackDemo";
import MainButtonDemo from "@component/MainButtonDemo";
import ShowPopupDemo from "@component/ShowPopupDemo";
import useTelegram from "@hooks/useTelegram";
import { Link } from "react-router-dom";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  return (
    <div>
      <input
        type="file"
        className="changeimage"
        id="changeimage"
        accept="image/*"
      />
      <MainButtonDemo />
      <BackButtonDemo />
      <ShowPopupDemo />
      <HapticFeedbackDemo />
      <Link to="/products/add">AddProduct</Link>
    </div>
  );
}

export default Home;
