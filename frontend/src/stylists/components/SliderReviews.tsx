import React from "react";

import { Review } from "../../shared/models/reviewModel";
import { showStars } from "../../shared/utils/utils";
import SliderDefault from "../../shared/components/Slider/SliderDefault";

import {
  StyledContainerFull,
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledBoxStars,
} from "./SliderReviews.css";

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
    <StyledContainerFull>
      <StyledContainer>
        <StyledTitle>Opinie naszych Klientek</StyledTitle>
        <SliderDefault settings={settings}>
          {reviewList.map((review) => (
            <React.Fragment key={review._id}>
              <StyledText>{review.comment}</StyledText>
              <StyledBoxStars>{showStars(review.stars)}</StyledBoxStars>
            </React.Fragment>
          ))}
        </SliderDefault>
      </StyledContainer>
    </StyledContainerFull>
  );
};

export default SliderReviews;
