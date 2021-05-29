import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "../../shared/store/StoreProvider";
import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Image from "../../shared/components/UIElements/Image";

import { StyledContainerSlide, StyledContainerInfo } from "./SliderHero.css";
import Button from "../../shared/components/UIElements/Button";

const SliderHero = () => {
  const { slideList } = useContext(StoreContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  return (
    <SliderDefault settings={settings}>
      {slideList.map((slide) => (
        <StyledContainerSlide key={slide._id}>
          <Image
            margin='0'
            paddingTop='40%'
            img={slide.img}
            alt={slide.title}
          />
          <StyledContainerInfo>
            <h3>{slide.title}</h3>
            <Link to={slide.url}>
              <Button>Zobacz więcej</Button>
            </Link>
          </StyledContainerInfo>
        </StyledContainerSlide>
      ))}
    </SliderDefault>
  );
};

export default SliderHero;
