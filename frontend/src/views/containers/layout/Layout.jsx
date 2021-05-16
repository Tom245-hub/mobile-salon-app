import React, { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LoginModal from "../modals/LoginModal/LoginModal";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
