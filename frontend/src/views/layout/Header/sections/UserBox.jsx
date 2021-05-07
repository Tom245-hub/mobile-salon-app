import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "../../../../store/StoreProvider";
import BoxReservation from "../../../components/BoxReservation";
import LinkOpenModal from "../../../components/LinkOpenModal";

const UserBox = (props) => {
  const { setLoginModal } = useContext(StoreContext);

  return (
    <div className='d-flex h-100'>
      <div className='d-flex justify-content-center align-items-center px-3'>
        <LinkOpenModal setLoginModal={setLoginModal}>ZALOGUJ</LinkOpenModal>
      </div>

      <BoxReservation>
        <Link to='/strefa-klientki/zamowienie'>ZAREZERWUJ</Link>
      </BoxReservation>
    </div>
  );
};

export default UserBox;
