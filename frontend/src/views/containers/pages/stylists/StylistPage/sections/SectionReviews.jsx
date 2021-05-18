import React from "react";
import PropTypes from "prop-types";

import { showStars } from "../../../../../../utils/utils";

import SliderReviews from "../../../../../components/SliderReviews";
import SectionTitle from "../../../../../components/fonts/SectionTitle";
import PrevArrow from "../../../../../components/PrevArrow";
import NextArrow from "../../../../../components/NextArrow";

const SectionReviews = ({ reviews }) => {
  console.log(reviews);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
  };

  return (
    <>
      <SectionTitle>Opinie Klientek</SectionTitle>
      <div className='row'>
        <div className='col-12'>
          <SliderReviews data={reviews} settings={settings} margin='0.5rem' showStars={showStars} />
        </div>
      </div>
    </>
  );
};

SectionReviews.propTypes = {
  reviews: PropTypes.array,
};

export default SectionReviews;
