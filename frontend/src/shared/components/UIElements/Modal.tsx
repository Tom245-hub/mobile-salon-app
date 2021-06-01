import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  StyledContainer,
  StyledHeader,
  StyledHeaderText,
  StyledIcon,
  StyledSection,
} from "./Modal.css";
import Backdrop from "./Backdrop";

interface ModalProps {
  header: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, header, closeModal }) => {
  const content = (
    <StyledContainer>
      <Backdrop onClick={closeModal} />
      <StyledHeader>
        <StyledHeaderText>{header}</StyledHeaderText>{" "}
        <StyledIcon onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </StyledIcon>
      </StyledHeader>
      <StyledSection>{children}</StyledSection>
    </StyledContainer>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

export default Modal;
