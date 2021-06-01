import React from "react";
import { StyledButton } from "./Button.css";

interface ButtonProps {
  children: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  margin?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick, margin }) => {
  return (
    <StyledButton type={type} onClick={onClick} margin={margin}>
      {children}
    </StyledButton>
  );
};

export default Button;
