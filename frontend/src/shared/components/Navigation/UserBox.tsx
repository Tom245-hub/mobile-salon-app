import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../UIElements/LoginModal";
import Button from "../UIElements/Button";
import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);

  return (
    <>
      <LoginModal
        isOpenLoginModal={isOpenLoginModal}
        setIsOpenLoginModal={setIsOpenLoginModal}
        titleText='Logowanie Klientki'
      />

      <StyledContainer>
        <StyledLink onClick={() => setIsOpenLoginModal(true)}>
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
