import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import SectionTitle from "../../shared/components/UIElements/SectionTitle";
import SliderInfo from "../../shared/components/Slider/SliderInfo";
import Image from "../../shared/components/UIElements/Image";

const StyledContainerSlide = styled.div`
  position: relative;
`;

const SliderHero = ({ slideList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  return (
    <SliderDefault settings={settings}>
      {slideList.map((slide) => (
        <StyledContainerSlide key={slide._id}>
          <Image
            height='75%'
            title={slide.title}
            img={slide.img}
          />
          <SliderInfo>
            <SectionTitle>{slide.title}</SectionTitle>
            <Link to={slide.url}>
              <button className='btn btn-secondary'>
                Zobacz więcej
              </button>
            </Link>
          </SliderInfo>
        </StyledContainerSlide>
      ))}
    </SliderDefault>
  );
};

export default SliderHero;
