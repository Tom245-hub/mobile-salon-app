import React from "react";
import styled from "styled-components";

const StyledErrorText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.danger};
  text-align: center;
  margin: 0.5rem 0;
`;

const ErrorText = ({ children }) => {
  return <StyledErrorText>{children}</StyledErrorText>;
};

export default ErrorText;
