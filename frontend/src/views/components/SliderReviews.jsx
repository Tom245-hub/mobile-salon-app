import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import styled from "styled-components";

import "../../../node_modules/slick-carousel/slick/slick.css";

const StyledContainerSlide = styled.div`
  position: relative;
  text-align: center;
`;

const StyledText = styled.h4`
  font-family: ${(props) => props.theme.fonts.artist};
`;

const StyledBoxStars = styled.span`
  color: ${(props) => props.theme.colors.gold};
`;

const SliderReviews = ({ settings, data, showStars }) => {
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <StyledContainerSlide key={index}>
          <StyledText>{item.comment}</StyledText>
          <StyledBoxStars>{showStars(item.stars)}</StyledBoxStars>
        </StyledContainerSlide>
      ))}
    </Slider>
  );
};

SliderReviews.propTypes = {
  settings: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  showStars: PropTypes.func.isRequired,
};

export default SliderReviews;
