import React from "react";
import PropTypes from "prop-types";

import SliderDefault from "../../shared/components/Slider/SliderDefault";

const SliderPortfolio = ({ portfolioList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
  };

  return (
    <>
      <SliderDefault settings={settings}>
        {portfolioList.map((slide) => (
          <React.Fragment key={slide._id}>
            <Image height='75%' title={slide.title} img={slide.img} />
            <SliderInfo>
              <SectionTitle>{slide.title}</SectionTitle>
              <Link to={slide.url}>
                <button className='btn btn-secondary'>Zobacz więcej</button>
              </Link>
            </SliderInfo>
          </React.Fragment>
        ))}
      </SliderDefault>
    </>
  );
};

SliderPortfolio.propTypes = {
  portfolioList: PropTypes.array,
};

export default SliderPortfolio;
