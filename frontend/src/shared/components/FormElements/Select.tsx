import React from "react";
import { StyledSelect } from "./Select.css";

interface SelectProps {
  id: string;
  name: string;
  value: string | number;
  onChange: (arg: object) => void;
  onBlur: (arg: object) => void;
  margin?: string;
}

const Select: React.FC<SelectProps> = ({
  children,
  id,
  name,
  value,
  onChange,
  onBlur,
  margin,
}) => {
  return (
    <StyledSelect
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin={margin}
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
