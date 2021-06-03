import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Button from "../FormElements/Button";
import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  ///////////////////
  const [isOpenLoginForm, setIsOpenLoginForm] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  const toggleOpenLoginForm = () => {
    if (isOpenLoginForm) {
      setIsEnterSlide(false);
      setTimeout(() => {
        setIsOpenLoginForm(false);
      }, 300);
    } else {
      setIsOpenLoginForm(true);

      setTimeout(() => {
        setIsEnterSlide(true);
      }, 50);
    }
  };
  ///////////////////////
  return (
    <>
      {isOpenLoginForm && (
        <LoginForm
          isEnterSlide={isEnterSlide}
          toggleOpenLoginForm={toggleOpenLoginForm}
        />
      )}
      <StyledContainer>
        <StyledLink onClick={toggleOpenLoginForm}>
          <FontAwesomeIcon icon={faUser} />
          ZALOGUJ
        </StyledLink>

        <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
      </StyledContainer>
    </>
  );
};

export default UserBox;
