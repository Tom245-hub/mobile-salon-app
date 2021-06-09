import React from "react";

import { Review } from "../../shared/models/reviewModel";
import { showStars } from "../../shared/utils/utils";
import SliderDefault from "../../shared/components/Slider/SliderDefault";

import { StyledContainer, StyledText, StyledBoxStars } from "./SliderReviews.css";

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
    <StyledContainer>
      <h2>Opinie naszych Klientek</h2>
      <SliderDefault settings={settings}>
        {reviewList.map((review) => (
          <React.Fragment key={review._id}>
            <StyledText>{review.comment}</StyledText>
            <StyledBoxStars>{showStars(review.stars)}</StyledBoxStars>
          </React.Fragment>
        ))}
      </SliderDefault>
    </StyledContainer>
  );
};

export default SliderReviews;
