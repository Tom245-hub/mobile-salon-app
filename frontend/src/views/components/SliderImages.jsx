import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

import Image from "./Image";

const ContainerSlide = styled.div`
  position: relative;
`;

const SliderImages = (props) => {
  return (
    <Slider {...props.settings}>
      {props.data.map((item, index) => (
        <ContainerSlide key={index}>
          <Image margin={props.margin} height={props.height} title={item.title} img={item.img} />
        </ContainerSlide>
      ))}
    </Slider>
  );
};

export default SliderImages;
