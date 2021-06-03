import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getSlideList } from "../../shared/data/actions/slideActions";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { Slide } from "../../shared/models/slideModel";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Image from "../../shared/components/UIElements/Image";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { StyledContainerSlide, StyledContainerInfo } from "./SliderHero.css";

const SliderHero: React.FC = () => {
  const dispatch = useDispatch();
  const slideList: Slide[] = useSelector((state: RootState) => state.slide.slideList);

  const isLoading = slideList.length === 0;

  useEffect(() => {
    dispatch(getSlideList());
  }, [getSlideList]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SliderDefault settings={settings}>
          {slideList.map((slide) => (
            <StyledContainerSlide key={slide._id}>
              <Image margin='0' paddingTop='40%' img={slide.img} alt={slide.title} />
              <StyledContainerInfo>
                <h3>{slide.title}</h3>
                <Button link={slide.url}>Zobacz więcej</Button>
              </StyledContainerInfo>
            </StyledContainerSlide>
          ))}
        </SliderDefault>
      )}
    </>
  );
};

export default SliderHero;
