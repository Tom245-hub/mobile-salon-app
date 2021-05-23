import React from "react";
import styled from "styled-components";

const StyledSectionSubtitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = ({ children }) => {
  return <StyledSectionSubtitle>{children}</StyledSectionSubtitle>;
};

export default SectionSubtitle;
