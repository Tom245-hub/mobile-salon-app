import React from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface SliderDefaultProps {
  children: any;
  settings: object;
}

const SliderDefault: React.FC<SliderDefaultProps> = (props) => {
  const settings = {
    ...{
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    },
    ...(props.settings ?? {}),
  };

  return (
    <div>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default SliderDefault;
