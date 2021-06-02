import React from "react";
import { Link } from "react-router-dom";
import { StyledButton, StyledConfirmButton, StyledCancelButton } from "./Button.css";

interface ButtonProps {
  children: string;
  variant?: "confirm" | "cancel";
  link?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  margin?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  link,
  onClick,
  type,
  margin,
}) => {
  const VariantButton = (() => {
    switch (variant) {
      case "confirm":
        return StyledConfirmButton;
      case "cancel":
        return StyledCancelButton;
      default:
        return StyledConfirmButton;
    }
  })();
  const button = (
    <VariantButton onClick={onClick} type={type} margin={margin}>
      {children}
    </VariantButton>
  );
  const content = link ? <Link to={link}>{button}</Link> : button;
  return <> {content} </>;
};

export default Button;
