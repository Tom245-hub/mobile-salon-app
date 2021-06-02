import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Login } from "../../shared/models/loginModel";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Modal from "../../shared/components/UIElements/Modal";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import { postUser } from "../../shared/data/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/data/reducers/rootReducers";

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required("Musisz wpisać email"),
    //   .email("Niepoprawny adres email"),
    password: Yup.string().required("Musisz wpisać hasło"),
    //   .min(5, "Hasło musi się składać z min. 5 znaków")
    //   .max(10, "Hasło musi się składać z max. 10 znaków"),
  });

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
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
    <Modal closeModal={closeModal} header='Logowanie'>
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

              <Button type='submit' margin='0 0.5rem 0 0'>
                Zaloguj się
              </Button>
              <Button type='button' onClick={closeModal}>
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

// const LoginModal: React.FC<LoginModalProps> = ({
//   isOpenLoginModal,
//   setIsOpenLoginModal,
//   titleText,
// }) => {
// const { setIsUserLogged } = useContext(StoreContext);

// const history = useHistory();

// const initialValues = {
//   email: "",
//   password: "",
// };

// const submitForm = async (values: Login) => {
//   const loginObject = {
//     login: values.email,
//     password: values.password,
//   };

//   const { data, status } = await request.post("/users", loginObject);

//   if (status === 200) {
//     setIsUserLogged(data.user);
//     setIsOpenLoginModal(false);
//     history.push("/strefa-stylistki/konto");
//   } else if (status === 404) {
//     // console.log("test3");
//     // obsługa błędów z serwera
//   }
// };
