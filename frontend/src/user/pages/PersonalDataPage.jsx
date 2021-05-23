import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../shared/store/StoreProvider";
import CommentText from "../../shared/components/UIElements/CommentText";
import PageTitle from "../../shared/components/UIElements/PageTitle";
import EditModalPersonal from "../components/EditModalPersonal";

const PersonalData = () => {
  const { user, userLogged } = useContext(StoreContext);
  const [editModal, setEditModal] = useState({ open: false });
  const userData = userLogged.personalData;
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  return (
    <>
      {editModal.open && <EditModalPersonal editModal={editModal} setEditModal={setEditModal} />}
      <div className='container-fluid my-5'>
        <PageTitle>Twoje dane</PageTitle>
        <CommentText>Te informacje są dostępne tylko dla Mobile Salon. Klientki ich nie widzą.</CommentText>
        <div className='row'>
          <div className='col-12'>
            <button onClick={() => setEditModal({ open: true })} className='btn btn-primary btn-sm'>
              Edytuj
            </button>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Imię:</th>
                  <th scope='col'>{userData.firstName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Nazwisko:</th>
                  <td>{userData.lastName}</td>
                </tr>
                <tr>
                  <th scope='row'>Email:</th>
                  <td>{userData.email ? userData.email : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Telefon:</th>
                  <td>{userData.phone ? userData.phone : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Rok urodzenia:</th>
                  <td>{userData.birthYear ? userData.birthYear : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Kod pocztowy:</th>
                  <td>{userData.zipcode ? userData.zipcode : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Miejscowość:</th>
                  <td>{userData.address.city ? userData.address.city : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Kod pocztowy:</th>
                  <td>{userData.address.zipcode ? userData.address.zipcode : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Ulica:</th>
                  <td>{userData.address.street ? userData.address.street : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Numer budynku:</th>
                  <td>{userData.address.numberBuild ? userData.address.numberBuild : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Numer lokalu:</th>
                  <td>{userData.address.numberLocal ? userData.address.numberLocal : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Nazwa firmy:</th>
                  <td>{userData.address.company ? userData.address.company : "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>NIP:</th>
                  <td>{userData.address.nip ? userData.address.nip : "brak"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
