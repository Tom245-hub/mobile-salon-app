import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { StyledLoadingSpinner } from "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <StyledLoadingSpinner>
      <FontAwesomeIcon icon={faSpinner} size='3x' pulse />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
