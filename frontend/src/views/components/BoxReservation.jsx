import React, { Children } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  background-color: ${(props) => props.theme.colors.primary};
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.light};
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const BoxReservation = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default BoxReservation;
