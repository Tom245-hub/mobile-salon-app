import React from "react";
import PropTypes from "prop-types";

import SectionTitle from "../../../../../components/fonts/SectionTitle";
import SliderImages from "../../../../../components/SliderImages";
import PrevArrow from "../../../../../components/PrevArrow";
import NextArrow from "../../../../../components/NextArrow";

const SectionPortfolio = ({ portfolio }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 5,
  };

  return (
    <>
      <SectionTitle>Prace stylistki</SectionTitle>
      <div className='row'>
        <div className='col-12'>
          <SliderImages settings={settings} margin='0.5rem' data={portfolio} info={false} height='70%' />
        </div>
      </div>
    </>
  );
};

SectionPortfolio.propTypes = {
  portfolio: PropTypes.array,
};

export default SectionPortfolio;
