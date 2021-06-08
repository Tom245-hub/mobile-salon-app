import React from "react";
import {
  StyledInfoValidPositive,
  StyledInfoValidNegative,
  StyledText,
} from "./InfoValid.css";

interface InfoValidProps {
  variant?: "positive" | "negative";
  margin?: string;
}

const InfoValid: React.FC<InfoValidProps> = ({ children, variant, margin }) => {
  const VariantInfoValid = (() => {
    switch (variant) {
      case "positive":
        return StyledInfoValidPositive;
      case "negative":
        return StyledInfoValidNegative;
      default:
        return StyledInfoValidNegative;
    }
  })();
  return (
    <VariantInfoValid margin={margin}>
      <StyledText>{children}</StyledText>
    </VariantInfoValid>
  );
};

export default InfoValid;
