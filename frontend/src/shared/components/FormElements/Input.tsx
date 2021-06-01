import React from "react";
import { Login } from "../../models/loginModel";
import { StyledInput } from "./Input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (arg: object) => void;
  onBlur: (arg: object) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
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
    />
  );
};

export default Input;
