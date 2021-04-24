import React, { useContext } from "react";

import { StoreContext } from "../../../../store/StoreProvider";
import SliderDefault from "../../../components/SliderDefault";

const SectionSlider = () => {
  const { slideList } = useContext(StoreContext);

  return <SliderDefault slidesToShow={1} data={slideList} info={true} />;
};

export default SectionSlider;
