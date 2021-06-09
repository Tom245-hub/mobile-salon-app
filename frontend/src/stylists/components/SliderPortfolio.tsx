import React from "react";
import PropTypes from "prop-types";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Image from "../../shared/components/UIElements/Image";
import { Slide } from "../../shared/models/slideModel";

interface SliderPortfolioProps {
  portfolioList: Slide[];
}
const SliderPortfolio: React.FC<SliderPortfolioProps> = ({ portfolioList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
  };

  return (
    <SliderDefault settings={settings}>
      {portfolioList.map((slide: Slide) => (
        <React.Fragment key={slide._id}>
          <Image paddingTop='75%' alt={slide.title} img={slide.img} margin='0 0.5rem' />
        </React.Fragment>
      ))}
    </SliderDefault>
  );
};

export default SliderPortfolio;
