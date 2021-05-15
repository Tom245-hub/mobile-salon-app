import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";
import CommentText from "../../../../components/fonts/CommentText";
import EditModal from "../EditModal/EditModal";

import PageTitle from "../../../../components/fonts/PageTitle";

const ProfileData = () => {
  const { user, userLogged } = useContext(StoreContext);
  // const [editModal, setEditModal] = useState({ open: false });
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  // console.log(userLogged);

  // const hairStylist = props.stylist && props.stylist.position.hairStylist && "fryzjerka";
  // const makeupStylist = stylist && stylist.position.makeupStylist && "wizażystka";

  return (
    <>
      {/* <EditModal setLoginModal={setLoginModal} loginModal={loginModal} titleText='Logowanie stylistki' /> */}

      <div className='container-fluid my-5'>
        <PageTitle>Twój profil</PageTitle>
        <CommentText>Te informacje są widoczne dla klientek w Twoim profilu.</CommentText>
        <div className='row'>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Imię:</th>
                  <th scope='col'>{userLogged.title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Opis:</th>
                  <td>
                    {userLogged.text}
                    <br />
                    <button onClick={() => setEditModal(true)} className='btn btn-primary btn-sm mt-2'>
                      Edytuj
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Doświadczenie:</th>
                  <td>{userLogged.experience} lat</td>
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
