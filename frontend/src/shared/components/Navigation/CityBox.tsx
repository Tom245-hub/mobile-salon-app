import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "./CityBox.css";

interface CityBoxProps {
  isActiveTopBar: boolean;
  setIsActiveTopBar: Function;
  city: string;
}

const CityBox: React.FC<CityBoxProps> = ({
  isActiveTopBar,
  setIsActiveTopBar,
  city,
}) => {
  return (
    <StyledLink onClick={() => setIsActiveTopBar(true)}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      {city ? city : "WYBIERZ MIASTO"}
      {!isActiveTopBar && city ? " (zmień)" : ""}
    </StyledLink>
  );
};

export default CityBox;
