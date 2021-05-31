import React from "react";
import styled from "styled-components";
import { StyledBox, StyledSpinner } from "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <StyledBox>
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
      <StyledSpinner />
    </StyledBox>
  );
};

export default LoadingSpinner;
