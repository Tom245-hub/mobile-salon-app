import React from "react";
import styled from "styled-components";

const StyledContainerHeader = styled.div`
  z-index: 105;
`;

const ContainerHeader = ({ children }) => {
  return <StyledContainerHeader className={"className='container-fluid bg-light"}>{children}</StyledContainerHeader>;
};

export default ContainerHeader;
