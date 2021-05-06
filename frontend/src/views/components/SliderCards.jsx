import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

import Card from "./Card";

const ContainerSlide = styled.div`
  position: relative;
`;

const SliderImages = (props) => {
  return (
    <Slider {...props.settings}>
      {props.data.length > 0 ? (
        props.data.map((item, index) => (
          <ContainerSlide key={index}>
            <Card margin={props.margin} img={item.img} url={item.url} title={item.title} bgColorHover={props.bgColorHover} />
          </ContainerSlide>
        ))
      ) : (
        <h5>{props.errorInfo}</h5>
      )}
    </Slider>
  );
};

export default SliderImages;
