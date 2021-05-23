import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../shared/store/StoreProvider";
import EditModalProfile from "../components/EditModalProfile";
import CommentText from "../../shared/components/UIElements/CommentText";
import PageTitle from "../../shared/components/UIElements/PageTitle";
import Image from "../../shared/components/UIElements/Image";

const ProfileData = () => {
  const { user, userLogged } = useContext(StoreContext);
  const [editModal, setEditModal] = useState({ open: false });
  const userData = userLogged.profileData;
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  return (
    <>
      {editModal.open && <EditModalProfile editModal={editModal} setEditModal={setEditModal} />}
      <div className='container-fluid my-5'>
        <PageTitle>Twój profil</PageTitle>
        <CommentText>Te informacje są dostępne w Twoim profilu. Klientki je widzą.</CommentText>
        <div className='row'>
          <div className='col-12'>
            <button onClick={() => setEditModal({ open: true })} className='btn btn-primary btn-sm mb-2'>
              Edytuj profil
            </button>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Imię:</th>
                  <th scope='col'>{userData.title ?? "brak"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Zdjęcie:</th>
                  <td>
                    <div style={{ maxWidth: 300 }}>{<Image img={userData.img} height='75%' /> ?? "brak"}</div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Opis:</th>
                  <td>{userData.text ?? "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Doświadczenie - fryzury:</th>
                  <td>{userData.hairStylExp ?? "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Doświadczenie - makijaże:</th>
                  <td>{userData.makeupStylExp ?? "brak"}</td>
                </tr>
                <tr>
                  <th scope='row'>Oddział:</th>
                  <td>{userData.city ?? "brak"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileData;
