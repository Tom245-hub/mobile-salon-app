import React, { useContext } from "react";

import { StoreContext } from "../../../../../../store/StoreProvider";
import SliderHero from "../../../../../components/SliderHero";
import PrevArrow from "../../../../../components/PrevArrow";
import NextArrow from "../../../../../components/NextArrow";

const SectionSlider = () => {
  const { slideList } = useContext(StoreContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
  };

  return <SliderHero settings={settings} data={slideList} info={true} height='50%' />;
};

export default SectionSlider;
