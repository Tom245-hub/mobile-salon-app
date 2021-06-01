import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

import LoginModal from "../../../user/components/LoginForm";
import FormsGroup from "../FormElements/FormsGroup";
import {
  StyledContainerFull,
  StyledContainer,
  StyledColTitle,
  StyledText,
} from "./Footer.css";

const Footer = () => {
  const { isUserLogged } = useContext(StoreContext);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <>
      {!isUserLogged && (
        <>
          <StyledContainerFull>
            <StyledContainer>
              <ul>
                <StyledColTitle>STREFA STYLISTKI</StyledColTitle>
                <li>
                  <Link to='/strefa-stylistki/rekrutacja'>kariera</Link>
                </li>
                <li>
                  <Link to='#'>warunki</Link>
                </li>
              </ul>

              <ul>
                <StyledColTitle>NAWIGACJA</StyledColTitle>
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
                <StyledColTitle>POMOC</StyledColTitle>
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
                <StyledColTitle>NEWSLETTER</StyledColTitle>
                <FormsGroup placeholder='Twój email' btnText='Zapisz się' />
              </div>
            </StyledContainer>
            <StyledText>
              Realizacja: <Link to='https://www.webite.pl/'>WEBite.pl</Link>
            </StyledText>
          </StyledContainerFull>
        </>
      )}
    </>
  );
};

export default Footer;
