import React, { useState } from "react";
import { Link } from "react-router-dom";

import LinkOpenModal from "../UIELements/LinkOpenModal";
import LoginModal from "./LoginModal";

const UserBox = () => {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <LoginModal
        setLoginModal={setLoginModal}
        loginModal={loginModal}
        titleText='Logowanie Klientki'
      />
      <div className='d-flex h-100'>
        <div className='d-flex justify-content-center align-items-center px-3'>
          <LinkOpenModal setLoginModal={setLoginModal}>
            ZALOGUJ
          </LinkOpenModal>
        </div>
        <Link to='/strefa-klientki/zamowienie'>
          <button className='btn btn-outline-primary'>
            ZAREZERWUJ
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserBox;
