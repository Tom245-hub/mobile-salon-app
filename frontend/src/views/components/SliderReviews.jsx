import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

const ContainerSlide = styled.div`
  position: relative;
  text-align: center;
`;

const Text = styled.h4`
  font-family: ${(props) => props.theme.fonts.artist};
`;

const BoxStars = styled.span`
  color: ${(props) => props.theme.colors.gold};
`;

const SliderReviews = (props) => {
  return (
    <Slider {...props.settings}>
      {props.data.map((item, index) => (
        <ContainerSlide key={index}>
          <Text>{item.comment}</Text>
          <BoxStars>{props.showStars(item.stars)}</BoxStars>
        </ContainerSlide>
      ))}
    </Slider>
  );
};

export default SliderReviews;
