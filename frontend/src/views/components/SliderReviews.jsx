import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../../node_modules/slick-carousel/slick/slick.css";

import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: props.slidesToShow,
  };

  const showStars = (stars) => {
    switch (stars) {
      case 1:
        return <FontAwesomeIcon icon={faStar} />;
      case 2:
        return (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
        );
      case 3:
        return (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
        );
      case 4:
        return (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
        );
      case 5:
        return (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Slider {...settings}>
      {props.data.map((item, index) => (
        <ContainerSlide key={index}>
          <Text>{item.text}</Text>
          <BoxStars>{showStars(item.stars)}</BoxStars>
        </ContainerSlide>
      ))}
    </Slider>
  );
};

export default SliderReviews;
