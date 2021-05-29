import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";

import request from "../../utils/request";
import { StoreContext } from "../../store/StoreProvider";
import Button from "./Button";
import {
  StyledContainer,
  StyledInfoValid,
  StyledInput,
} from "./LoginModal.css";

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required("Musisz wpisać email"),
    //   .email("Niepoprawny adres email"),
    password: Yup.string().required("Musisz wpisać hasło"),
    //   .min(5, "Hasło musi się składać z min. 5 znaków")
    //   .max(10, "Hasło musi się składać z max. 10 znaków"),
  });

interface LoginModalProps {
  isOpenLoginModal: boolean;
  setIsOpenLoginModal: Function;
  titleText: string;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpenLoginModal,
  setIsOpenLoginModal,
  titleText,
}) => {
  const { setIsUserLogged } = useContext(StoreContext);
  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  interface Values {
    email: string;
    password: string;
  }

  const submitForm = async (values: Values) => {
    const loginObject = {
      login: values.email,
      password: values.password,
    };

    const { data, status } = await request.post("/users", loginObject);

    if (status === 200) {
      setIsUserLogged(data.user);
      setIsOpenLoginModal(false);
      history.push("/strefa-stylistki/konto");
    } else if (status === 404) {
      // console.log("test3");
      // obsługa błędów z serwera
    }
  };
  return (
    <Modal
      size='sm'
      show={isOpenLoginModal}
      onHide={() => setIsOpenLoginModal(false)}
      aria-labelledby='confirm-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id='confirm-modal'>{titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
            } = formik;

            return (
              <StyledContainer>
                <form onSubmit={handleSubmit} noValidate>
                  <StyledInput
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <StyledInput
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Hasło'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {errors.email && touched.email && (
                    <StyledInfoValid>{errors.email}</StyledInfoValid>
                  )}

                  {errors.password && touched.password && (
                    <StyledInfoValid>{errors.password}</StyledInfoValid>
                  )}

                  <Button type='submit'>Zaloguj</Button>
                </form>
              </StyledContainer>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
