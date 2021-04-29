import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";

const PersonalData = (props) => {
  const { loggedUser } = useContext(StoreContext);
  const user = loggedUser.user;
  const stylist = loggedUser.stylist;
  const history = useHistory();

  if (!loggedUser) {
    history.push("/");
  }
  // console.log(stylist);

  const hairStylist = stylist && stylist.position.hairStylist && "fryzjerka";
  const makeupStylist = stylist && stylist.position.makeupStylist && "wizażystka";

  return (
    <div className='container-fluid my-5'>
      <h2 className='text-center mb-3'>Twoje dane</h2>
      <div className='row'>
        <div className='col-6'>
          <p>Imię: {stylist.title}</p>
          <p>Opis: {stylist.text}</p>
          <p>
            Stanowisko: {hairStylist}
            {hairStylist && ", "}
            {makeupStylist}
          </p>
          <p>Doświadczenie: {stylist.experience} lat</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
