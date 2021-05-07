import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";

import PageTitle from "../../../../components/fonts/PageTitle";

const PersonalData = (props) => {
  const { user } = useContext(StoreContext);
  // const user = loggedUser.user;
  // const stylist = loggedUser.stylist;
  const history = useHistory();

  if (!loggedUser) {
    history.push("/");
  }
  // console.log(stylist);

  const hairStylist = stylist && stylist.position.hairStylist && "fryzjerka";
  const makeupStylist = stylist && stylist.position.makeupStylist && "wizażystka";

  return (
    <div className='container-fluid my-5'>
      <PageTitle>Twoje dane</PageTitle>
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
