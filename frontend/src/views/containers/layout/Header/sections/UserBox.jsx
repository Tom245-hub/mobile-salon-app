import React, { useState } from "react";
import { Link } from "react-router-dom";

import BoxReservation from "../../../../components/BoxReservation";
import LinkOpenModal from "../../../../components/LinkOpenModal";
import LoginModal from "../../../modals/LoginModal/LoginModal";

const UserBox = () => {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <LoginModal setLoginModal={setLoginModal} loginModal={loginModal} titleText='Logowanie Klientki' />
      <div className='d-flex h-100'>
        <div className='d-flex justify-content-center align-items-center px-3'>
          <LinkOpenModal setLoginModal={setLoginModal}>ZALOGUJ</LinkOpenModal>
        </div>
        <BoxReservation>
          <Link to='/strefa-klientki/zamowienie'>ZAREZERWUJ</Link>
        </BoxReservation>
      </div>
    </>
  );
};

export default UserBox;
