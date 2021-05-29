import React from "react";
import { StyledButton } from "./Button.css";

interface ButtonProps {
  children: string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
