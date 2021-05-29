import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const StyledLoadingSpinner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <StyledLoadingSpinner>
      <FontAwesomeIcon icon={faSpinner} size='3x' pulse />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
