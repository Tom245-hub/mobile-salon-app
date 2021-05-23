import React from "react";
import styled from "styled-components";

const StyledCardTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  margin: 1.5rem 0;
`;

const CardTitle = ({ children }) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
