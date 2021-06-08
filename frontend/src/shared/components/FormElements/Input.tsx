import React from "react";
import { StyledInput } from "./Input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "password" | "number";
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (arg: object) => void;
  onBlur: (arg: object) => void;
  margin?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  margin,
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin={margin}
    />
  );
};

export default Input;
