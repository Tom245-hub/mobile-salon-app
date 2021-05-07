import React from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

export default SectionTitle;
