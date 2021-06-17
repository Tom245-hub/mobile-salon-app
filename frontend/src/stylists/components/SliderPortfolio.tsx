import React from "react";
import { StyledContainer, StyledTitle } from "./SliderPortfolio.css";

import { Slide } from "../../shared/models/slideModel";
import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Image from "../../shared/components/UIElements/Image";

interface SliderPortfolioProps {
  portfolio: Slide[];
}
const SliderPortfolio: React.FC<SliderPortfolioProps> = ({ portfolio }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
  };

  return (
    <StyledContainer>
      <StyledTitle>Portfolio stylistki</StyledTitle>
      <SliderDefault settings={settings}>
        {portfolio.map((slide: Slide) => (
          <React.Fragment key={slide._id}>
            <Image
              key={slide._id}
              paddingTop='75%'
              alt={slide.title}
              img={slide.img}
              margin='0 0.5rem'
            />
          </React.Fragment>
        ))}
      </SliderDefault>
    </StyledContainer>
  );
};

export default SliderPortfolio;
