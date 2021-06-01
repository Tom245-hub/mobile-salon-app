import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Button from "../FormElements/Button";

import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && <LoginForm closeModal={closeModal} />}
      <StyledContainer>
        <StyledLink onClick={() => setIsOpenModal(true)}>
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
