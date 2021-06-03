import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";
import { openCityForm } from "../../data/actions/cityFormActions";

import CityForm from "./CityForm";

import { StyledLink, StyledText } from "./CityBox.css";

const CityBox: React.FC = () => {
  const dispatch = useDispatch();
  const isOpenCityForm = useSelector((state: RootState) => state.cityForm.isOpenCityForm);
  const selectedCity = useSelector((state: RootState) => state.city.city.city);
  return (
    <>
      {isOpenCityForm && <CityForm />}
      <StyledLink onClick={() => dispatch(openCityForm())}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <StyledText>{selectedCity ? selectedCity : "WYBIERZ MIASTO"}</StyledText>
      </StyledLink>
    </>
  );
};

export default CityBox;
