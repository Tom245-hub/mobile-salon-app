import React from "react";
import { StyledBox, StyledText } from "./InfoValid.css";

interface InfoValidProps {
  children: string;
}

const InfoValid: React.FC<InfoValidProps> = ({ children }) => {
  return (
    <StyledBox>
      <StyledText>{children}</StyledText>
    </StyledBox>
  );
};

export default InfoValid;
