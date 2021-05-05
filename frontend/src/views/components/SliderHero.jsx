import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

import Image from "./Image";
import SliderInfo from "./SliderInfo";

const ContainerSlide = styled.div`
  position: relative;
`;

const SliderHero = (props) => {
  return (
    <Slider {...props.settings}>
      {props.data.map((item, index) => (
        <ContainerSlide key={index}>
          <Image height={props.height} title={item.title} img={item.img} />
          <SliderInfo title={item.title} url={item.url} />
        </ContainerSlide>
      ))}
    </Slider>
  );
};

export default SliderHero;
