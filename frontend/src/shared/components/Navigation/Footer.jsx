import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import LoginModal from "./LoginModal";
import FormGroup from "../UIELements/FormGroup";
import LinkOpenModal from "../UIELements/LinkOpenModal";

const Footer = () => {
  const { user } = useContext(StoreContext);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      {!user && (
        <>
          <LoginModal
            setLoginModal={setLoginModal}
            loginModal={loginModal}
            titleText='Logowanie Stylistki'
          />
          <footer className='container-fluid h-100 bg-light'>
            <div className='container'>
              <div className='row py-4'>
                <div className='col-3 border-right border-grey-100'>
                  <h5 className='mb-3'>STREFA STYLISTKI</h5>
                  <ul>
                    <li>
                      <Link to='/strefa-stylistki/rekrutacja'>
                        kariera
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>warunki</Link>
                    </li>
                    <li>
                      <LinkOpenModal
                        setLoginModal={setLoginModal}
                      >
                        logowanie
                      </LinkOpenModal>
                    </li>
                  </ul>
                </div>

                <div className='col-9 pl-5'>
                  <div className='row'>
                    <div className='col-4'>
                      <h5 className='mb-3'>NAWIGACJA</h5>
                      <ul className='mb-3'>
                        <li>
                          <Link to='#'>usługi</Link>
                        </li>
                        <li>
                          <Link to='#'>stylistki</Link>
                        </li>
                        <li>
                          <Link to='#'>blog</Link>
                        </li>
                      </ul>
                      <div>
                        <span className='mr-2'>
                          <FontAwesomeIcon
                            icon={faFacebook}
                          />
                        </span>
                        <span className='mr-2'>
                          <FontAwesomeIcon
                            icon={faInstagram}
                          />
                        </span>
                        <span className='mr-2'>
                          <FontAwesomeIcon
                            icon={faGoogle}
                          />
                        </span>
                      </div>
                    </div>
                    <div className='col-4 '>
                      <h5 className='mb-3'>POMOC</h5>
                      <ul>
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
                    </div>

                    <div className='col-4'>
                      <h5 className='mb-3'>NEWSLETTER</h5>
                      <FormGroup
                        placeholder='Twój email'
                        btnText='Zapisz się'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <hr className='mx-auto mb-1' />
                <h6 className='text-center'>
                  Realizacja:{" "}
                  <Link to='https://www.webite.pl/'>
                    WEBite.pl
                  </Link>
                </h6>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
