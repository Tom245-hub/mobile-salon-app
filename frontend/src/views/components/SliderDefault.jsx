import React from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";

import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Image from "./Image";
import SliderInfo from "./SliderInfo";

const SliderDefault = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: props.slidesToShow,
  };

  const slides = props.data.map((item, index) => (
    <div key={index} className="position-relative">
      <Image height="50%" title={item.title} img={item.img} />

      {props.info && <SliderInfo title={item.title} url={item.url} />}
    </div>
  ));

  return <Slider {...settings}>{slides}</Slider>;
};

export default SliderDefault;
