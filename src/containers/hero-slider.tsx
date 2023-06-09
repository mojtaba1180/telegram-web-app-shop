import { useGetSliders } from "@framework/api/slider/get";
import { Carousel } from "antd";

function HeroSlider() {
  const { data } = useGetSliders();
  return data?.length === 0 ? (
    <span />
  ) : (
    <Carousel rootClassName="rounded-lg overflow-hidden" autoplay>
      {data?.map((item, idx) => (
        <div className="h-[160px] w-full">
          <a href={item.url}>
            <img
              src={`${import.meta.env.VITE_API_URL}/${item.photo_Path}`}
              alt="slider"
            />
          </a>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
