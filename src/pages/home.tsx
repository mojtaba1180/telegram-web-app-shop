import Boxes from "@containers/boxes";
import HeroSlider from "@containers/hero-slider";
import ProductNews from "@containers/product-news";
import useTelegram from "@hooks/useTelegram";
import { useNavigate } from "react-router-dom";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <HeroSlider />
      <Boxes />
      <ProductNews />
    </div>
  );
}

export default Home;
