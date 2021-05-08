import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const LinkOpenModal = (props) => {
  return <StyledLink onClick={() => props.setLoginModal(true)}>{props.children}</StyledLink>;
};

export default LinkOpenModal;
