import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Image from "./Image";
import SliderInfo from "./SliderInfo";

const ContainerSlide = styled.div`
  position: relative;
`;

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

  return (
    <Slider {...settings}>
      {props.data.map((item, index) => (
        <ContainerSlide key={index}>
          <Image height={props.height} title={item.title} img={item.img} />
          {props.info && <SliderInfo title={item.title} url={item.url} />}
        </ContainerSlide>
      ))}
    </Slider>
  );
};

export default SliderDefault;
