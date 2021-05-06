import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import SliderReviews from "../../../../components/SliderReviews";
import { PageSubTitle } from "../../../../components/Title";

import PrevArrow from "../../../../components/PrevArrow";
import NextArrow from "../../../../components/NextArrow";

const SectionReviews = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
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
    <>
      <PageSubTitle>Opinie Klientek</PageSubTitle>
      <div className='row'>
        <div className='col-12'>{props.stylist && <SliderReviews data={props.stylist.reviews} settings={settings} margin='0.5rem' showStars={showStars} />}</div>
      </div>
    </>
  );
};

export default SectionReviews;
