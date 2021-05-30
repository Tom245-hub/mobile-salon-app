import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSlideList } from "../../shared/data/actions/slideActions";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { Slide } from "../../shared/models/slideModel";
import { Loading } from "../../shared/models/loadingModel";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Image from "../../shared/components/UIElements/Image";
import Button from "../../shared/components/UIElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { StyledContainerSlide, StyledContainerInfo } from "./SliderHero.css";

interface SliderHeroProps {
  slideList: Slide[];
  loading: Loading | any;
  getSlideList: Function;
}
const SliderHero: React.FC<SliderHeroProps> = ({ slideList, loading, getSlideList }) => {
  const isLoading = loading.SLIDE_LIST_GET_REQUEST;

  useEffect(() => {
    getSlideList();
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
                <Link to={slide.url}>
                  <Button>Zobacz więcej</Button>
                </Link>
              </StyledContainerInfo>
            </StyledContainerSlide>
          ))}
        </SliderDefault>
      )}
    </>
  );
};

export default connect(
  (state: RootState) => {
    return {
      slideList: state.slide.slideList,
      loading: state.slide.loading,
    };
  },
  {
    getSlideList,
  }
)(SliderHero);
