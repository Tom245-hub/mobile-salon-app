import React, { Children } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  transition: 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.primary};
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

const BoxReservation = (props) => {
  return <StyledBox className='d-flex justify-content-center align-items-center px-3'>{props.children}</StyledBox>;
};

export default BoxReservation;
