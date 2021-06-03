import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "./CityBox.css";
import CityForm from "./CityForm";

const CityBox: React.FC = () => {
  const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

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
        {"WYBIERZ MIASTO"}
      </StyledLink>
    </>
  );
};

export default CityBox;
