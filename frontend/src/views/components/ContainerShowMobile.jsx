import React from "react";
import styled from "styled-components";

const StyledContainerShowMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContainerShowMobile = ({ children }) => {
  return <StyledContainerShowMobile>{children}</StyledContainerShowMobile>;
};

export default ContainerShowMobile;
