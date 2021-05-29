import React from "react";
import { StyledBox, StyledInput, StyledButton } from "./FormsGroup.css";

interface FormsGroupProps {
  placeholder: string;
  btnText: string;
}

const FormsGroup: React.FC<FormsGroupProps> = ({ placeholder, btnText }) => {
  return (
    <StyledBox>
      <StyledInput type='text' placeholder={placeholder} />
      <StyledButton>{btnText}</StyledButton>
    </StyledBox>
  );
};

export default FormsGroup;
