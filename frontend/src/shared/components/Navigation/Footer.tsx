import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import LoginModal from "../UIElements/LoginModal";
import FormsGroup from "../FormElements/FormsGroup";
import { StyledContainerFull, StyledContainer } from "./Footer.css";

const Footer = () => {
  const { isUserLogged } = useContext(StoreContext);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <>
      {!isUserLogged && (
        <>
          <LoginModal
            setIsOpenLoginModal={setIsOpenLoginModal}
            isOpenLoginModal={isOpenLoginModal}
            titleText='Logowanie Stylistki'
          />
          <StyledContainerFull>
            <StyledContainer>
              <ul>
                <h5>STREFA STYLISTKI</h5>
                <li>
                  <Link to='/strefa-stylistki/rekrutacja'>kariera</Link>
                </li>
                <li>
                  <Link to='#'>warunki</Link>
                </li>
                <li>
                  <a onClick={() => setIsOpenLoginModal(true)}>logowanie</a>
                </li>
              </ul>

              <ul>
                <h5>NAWIGACJA</h5>
                <li>
                  <Link to='#'>usługi</Link>
                </li>
                <li>
                  <Link to='#'>stylistki</Link>
                </li>
                <li>
                  <Link to='#'>blog</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faGoogle} />
                </li>
              </ul>

              <ul>
                <h5>POMOC</h5>
                <li>
                  <Link to='#'>faq</Link>
                </li>
                <li>
                  <Link to='#'>regulamin</Link>
                </li>
                <li>
                  <Link to='#'>standard usług</Link>
                </li>
              </ul>

              <div>
                <h5>NEWSLETTER</h5>
                <FormsGroup placeholder='Twój email' btnText='Zapisz się' />
              </div>
            </StyledContainer>
            <h6>
              Realizacja: <Link to='https://www.webite.pl/'>WEBite.pl</Link>
            </h6>
          </StyledContainerFull>
        </>
      )}
    </>
  );
};

export default Footer;
