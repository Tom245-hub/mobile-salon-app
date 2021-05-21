import React from "react";
import styled from "styled-components";

const StyledContainerHideMobile = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerHideMobile = ({ children }) => {
  return <StyledContainerHideMobile>{children}</StyledContainerHideMobile>;
};

export default ContainerHideMobile;
