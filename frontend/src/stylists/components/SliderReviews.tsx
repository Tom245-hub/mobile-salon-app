import React from "react";
import styled from "styled-components";
import SliderDefault from "../../shared/components/Slider/SliderDefault";
import { Review } from "../../shared/models/reviewModel";

import { showStars } from "../../shared/utils/utils";

const StyledText = styled.h4`
  font-family: ${(props) => props.theme.fonts.artist};
`;

const StyledBoxStars = styled.span`
  color: ${(props) => props.theme.colors.gold};
`;

interface SliderReviewsProps {
  reviewList: Review[];
}

const SliderReviews: React.FC<SliderReviewsProps> = ({ reviewList }) => {
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

export default SliderReviews;
