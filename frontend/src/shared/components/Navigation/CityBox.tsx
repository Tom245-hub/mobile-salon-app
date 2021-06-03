import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../data/reducers/rootReducers";

import CityForm from "./CityForm";

import { StyledLink, StyledText } from "./CityBox.css";

const CityBox: React.FC = () => {
  const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  const selectedCity = useSelector((state: RootState) => state.city.city.city);
  console.log(selectedCity);

  const toggleOpenPortal = () => {
    if (isOpenPortal) {
      setIsEnterSlide(false);
      setTimeout(() => {
        setIsOpenPortal(false);
      }, 300);
    } else {
      setIsOpenPortal(true);
      setTimeout(() => {
        setIsEnterSlide(true);
      }, 50);
    }
  };
  return (
    <>
      {isOpenPortal && (
        <CityForm isEnterSlide={isEnterSlide} toggleOpenPortal={toggleOpenPortal} />
      )}
      <StyledLink onClick={toggleOpenPortal}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <StyledText>{selectedCity ? selectedCity : "WYBIERZ MIASTO"}</StyledText>
      </StyledLink>
    </>
  );
};

export default CityBox;
