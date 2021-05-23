import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { showStars } from "../../shared/utils/utils";

const StyledText = styled.h4`
  font-family: ${(props) => props.theme.fonts.artist};
`;

const StyledBoxStars = styled.span`
  color: ${(props) => props.theme.colors.gold};
`;

const SliderReviews = ({ reviewList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  return (
    <SliderDefault settings={settings}>
      {reviewList.map((review) => (
        <React.Fragment key={review._id}>
          <StyledText>{review.comment}</StyledText>
          <StyledBoxStars>{showStars(review.stars)}</StyledBoxStars>
        </React.Fragment>
      ))}
    </SliderDefault>
  );
};

SliderReviews.propTypes = {
  reviewList: PropTypes.array,
};

export default SliderReviews;
