import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Button from "../FormElements/Button";
import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  ///////////////////
  const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  const toggleOpenPortal = () => {
    if (isOpenPortal) {
      setIsEnterSlide(false);
      setTimeout(() => {
        setIsOpenPortal(false);
      }, 300);
    } else {
      setIsOpenPortal(true);

      setTimeout(() => {
        setIsEnterSlide(true);
      }, 50);
    }
  };
  ///////////////////////
  return (
    <>
      {isOpenPortal && (
        <LoginForm isEnterSlide={isEnterSlide} toggleOpenPortal={toggleOpenPortal} />
      )}
      <StyledContainer>
        <StyledLink onClick={toggleOpenPortal}>
          <FontAwesomeIcon icon={faUser} />
          ZALOGUJ
        </StyledLink>

        <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
      </StyledContainer>
    </>
  );
};

export default UserBox;
