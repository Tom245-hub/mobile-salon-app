import React, { useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const { loggedUser } = useContext(StoreContext);

  return (
    <div>
      <Header />
      {props.children}
      {!loggedUser && <Footer />}
    </div>
  );
};

export default Layout;
