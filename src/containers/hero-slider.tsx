import { useGetSliders } from "@framework/api/slider/get";
import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

function HeroSlider() {
  const { data, isFetching, isLoading } = useGetSliders();
  console.log(data);
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
