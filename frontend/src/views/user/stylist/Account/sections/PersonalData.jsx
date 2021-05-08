import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";
import CommentText from "../../../../components/fonts/CommentText";

import PageTitle from "../../../../components/fonts/PageTitle";

const PersonalData = () => {
  const { user, userLogged } = useContext(StoreContext);
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  // console.log(userLogged);

  // const hairStylist = props.stylist && props.stylist.position.hairStylist && "fryzjerka";
  // const makeupStylist = stylist && stylist.position.makeupStylist && "wizażystka";

  return (
    <div className='container-fluid my-5'>
      <PageTitle>Twoje dane</PageTitle>
      <CommentText>Te informacje są dostępne tylko dla Mobile Salon. Klientki ich nie widzą.</CommentText>
      <div className='row'>
        <div className='col-6'>
          <p>Imię: {userLogged.title}</p>
          <p>Opis: {userLogged.text}</p>
          {/* <p> */}
          {/* Stanowisko: {hairStylist}
            {hairStylist && ", "}
            {makeupStylist}
          </p> */}
          <p>Doświadczenie: {userLogged.experience} lat</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
