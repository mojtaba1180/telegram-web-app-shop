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
  return (
    <Carousel rootClassName="rounded-lg overflow-hidden" autoplay>
      {[1, 2, 3].map((_, idx) => (
        <div className="h-[160px] w-full">
          <img src={`/images/slide-${_}.jpg`} alt="slider" />
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
