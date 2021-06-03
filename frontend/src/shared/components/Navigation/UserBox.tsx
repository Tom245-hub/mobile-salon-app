import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";
import { openLoginForm } from "../../data/actions/loginFormActions";

import Button from "../FormElements/Button";
import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  const dispatch = useDispatch();
  const isOpenLoginForm = useSelector(
    (state: RootState) => state.loginForm.isOpenLoginForm
  );

  return (
    <>
      {isOpenLoginForm && <LoginForm />}
      <StyledContainer>
        <StyledLink onClick={() => dispatch(openLoginForm())}>
          <FontAwesomeIcon icon={faUser} />
          ZALOGUJ
        </StyledLink>

        <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
      </StyledContainer>
    </>
  );
};

export default UserBox;
