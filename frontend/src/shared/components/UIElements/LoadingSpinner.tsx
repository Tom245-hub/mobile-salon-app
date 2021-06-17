import React from "react";
import { StyledBox, StyledSpinner } from "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  variant?: "spinner" | "error";
  errorText?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ variant, errorText }) => {
  const spinner = (
    <>
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
    </>
  );

  if (variant === "spinner") {
    return <StyledBox>{spinner}</StyledBox>;
  } else if (variant === "error") {
    return (
      <StyledBox>
        <h2>{errorText}</h2>
      </StyledBox>
    );
  } else {
    return <StyledBox>{spinner}</StyledBox>;
  }
};

export default LoadingSpinner;
