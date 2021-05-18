import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

import Card from "./Card";

const ContainerSlide = styled.div`
  position: relative;
`;

const SliderStylistsCards = ({ settings, margin, data, bgColorHover, errorInfo }) => {
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <ContainerSlide key={index}>
          <Card margin={margin} img={item.profileData.img} url={item.profileData.url} title={item.profileData.title} bgColorHover={bgColorHover} />
        </ContainerSlide>
      )) ?? <h5>{errorInfo}</h5>}
    </Slider>
  );
};

SliderStylistsCards.propTypes = {
  settings: PropTypes.object,
  margin: PropTypes.string,
  data: PropTypes.array,
  bgColorHover: PropTypes.bool,
  errorInfo: PropTypes.string,
};

export default SliderStylistsCards;
