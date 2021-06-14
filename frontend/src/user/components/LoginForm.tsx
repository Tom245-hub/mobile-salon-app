import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Login } from "../../shared/models/loginModel";
import { RootState } from "../../shared/data/reducers/rootReducers";

import { postUser } from "../../shared/data/actions/userActions";
import { closeLoginForm } from "../../shared/data/actions/loginFormActions";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Modal from "../../shared/components/UIElements/Modal";
import InfoValid from "../../shared/components/FormElements/InfoValid";

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required("Musisz wpisać email"),
    //   .email("Niepoprawny adres email"),
    password: Yup.string().required("Musisz wpisać hasło"),
    //   .min(5, "Hasło musi się składać z min. 5 znaków")
    //   .max(10, "Hasło musi się składać z max. 10 znaków"),
  });

// interface LoginFormProps {
//   isEnterSlide: boolean;
//   toggleOpenPortal: () => void;
// }

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const isEnterSlide = useSelector((state: RootState) => state.loginForm.isEnterSlide);

  const user: object = useSelector((state: RootState) => state.user);
  // console.log(user);

  const submitForm = async (values: Login) => {
    const loginObject = {
      login: values.email,
      password: values.password,
    };

    dispatch(postUser(loginObject));
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Modal
      header='Logowanie'
      isEnterSlide={isEnterSlide}
      closePortal={() => dispatch(closeLoginForm())}
    >
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
            <form onSubmit={handleSubmit} noValidate>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                id='password'
                type='password'
                name='password'
                placeholder='Hasło'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.email && touched.email && <InfoValid>{errors.email}</InfoValid>}

              {errors.password && touched.password && (
                <InfoValid>{errors.password}</InfoValid>
              )}

              <Button type='submit' variant='confirm' margin='0 0.5rem 0 0'>
                Zaloguj się
              </Button>
              <Button
                type='button'
                variant='cancel'
                onClick={() => dispatch(closeLoginForm())}
              >
                Anuluj
              </Button>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default LoginForm;
