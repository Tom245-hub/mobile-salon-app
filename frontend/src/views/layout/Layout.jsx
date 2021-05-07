import React, { useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LoginModal from "./LoginModal/LoginModal";

const Layout = (props) => {
  const { loggedUser, loginModal, setLoginModal } = useContext(StoreContext);

  return (
    <>
      <Header />
      {props.children}
      {!loggedUser && <Footer />}
      <LoginModal setLoginModal={setLoginModal} loginModal={loginModal} titleText='Logowanie stylistki' />
    </>
  );
};

export default Layout;
