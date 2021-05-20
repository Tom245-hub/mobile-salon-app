import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const LinkOpenModal = ({ setLoginModal, children }) => {
  return <StyledLink onClick={() => setLoginModal(true)}>{children}</StyledLink>;
};

LinkOpenModal.propTypes = {
  setLoginModal: PropTypes.func.isRequired,
};

export default LinkOpenModal;
