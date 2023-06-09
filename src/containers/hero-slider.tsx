import { useGetSliders } from "@framework/api/slider/get";
import { Carousel } from "antd";

function HeroSlider() {
  const { data, isFetching, isLoading } = useGetSliders();
  return data?.length === 0 ? (
    <span />
  ) : (
    <Carousel rootClassName="rounded-lg overflow-hidden" autoplay>
      {data?.map((item, idx) => (
        <div className="h-[160px] w-full">
          <a href={item.url}>
            <img src={item.photo_Path} alt="slider" />
          </a>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
