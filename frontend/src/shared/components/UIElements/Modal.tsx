import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { openPortal, closePortal } from "../../data/actions/portalActions";

import { RootState } from "../../data/reducers/rootReducers";

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
  isEnterSlide: boolean;
  toggleOpenLoginForm: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  header,
  isEnterSlide,
  toggleOpenLoginForm,
}) => {
  const dispatch = useDispatch();

  const content = (
    <StyledContainer isEnterSlide={isEnterSlide}>
      <Backdrop onClick={toggleOpenLoginForm} />
      <StyledHeader>
        <StyledHeaderText>{header}</StyledHeaderText>
        <StyledIcon onClick={toggleOpenLoginForm}>
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
