import React from "react";
import styled from "styled-components";

const StyledContainerHeader = styled.div`
  z-index: 105;
`;

const ContainerHeader = (props) => {
  return <StyledContainerHeader className={"className='container-fluid bg-light"}>{props.children}</StyledContainerHeader>;
};

export default ContainerHeader;
