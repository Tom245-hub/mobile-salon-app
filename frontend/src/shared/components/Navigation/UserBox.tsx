import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Button from "../FormElements/Button";

import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  // const closeModal = () => {
  //   setIsOpenModal(false);
  // };

  const openModal = () => {
    setIsOpenModal(true);

    setTimeout(() => {
      setIsEnterSlide(true);
    }, 50);
  };

  const closeModal = () => {
    setIsEnterSlide(false);

    setTimeout(() => {
      setIsOpenModal(false);
    }, 300);
  };

  return (
    <>
      {isOpenModal && <LoginForm closeModal={closeModal} isEnterSlide={isEnterSlide} />}
      <StyledContainer>
        <StyledLink onClick={openModal}>
          <FontAwesomeIcon icon={faUser} />
          ZALOGUJ
        </StyledLink>

        <Link to='/strefa-klientki/zamowienie'>
          <Button>ZAREZERWUJ</Button>
        </Link>
      </StyledContainer>
    </>
  );
};

export default UserBox;
