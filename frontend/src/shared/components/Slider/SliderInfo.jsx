import React from "react";
import styled from "styled-components";

const StyledContainerInfo = styled.div`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 3px;
`;

const SliderInfo = ({ children }) => {
  return <StyledContainerInfo>{children}</StyledContainerInfo>;
};

export default SliderInfo;
