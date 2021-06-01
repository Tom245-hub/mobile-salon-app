import React from "react";
import { StyledBox, StyledText } from "./InfoValid.css";

const InfoValid: React.FC = ({ children }) => {
  return (
    <StyledBox>
      <StyledText>{children}</StyledText>
    </StyledBox>
  );
};

export default InfoValid;
