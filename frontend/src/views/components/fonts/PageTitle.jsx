import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PageTitle = ({ children }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
