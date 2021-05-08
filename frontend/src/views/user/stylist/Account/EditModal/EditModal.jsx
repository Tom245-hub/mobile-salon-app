import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import request from "../../../../../utils/request";
import { StoreContext } from "../../../../../store/StoreProvider";

const validationSchema = () =>
  Yup.object().shape({
    desc: Yup.string().required("Musisz wpisać opis"),
  });

const EditModal = (props) => {
  const { user, setUser } = useContext(StoreContext);
  const history = useHistory();

  const initialValues = {
    desc: "",
  };

  // const submitForm = async (values) => {
  //   const editObject = {
  //     desc: values.desc,
  //   };

  //   const { data, status } = await request.put(`/stylists/${user.idUser}`, editObject);

  //   if (status === 200) {
  //     setUser(data.user);
  //     props.setLoginModal(false);
  //     history.push("/strefa-stylistki/konto");
  //   } else if (status === 404) {
  //     // console.log("test3");
  //     // obsługa błędów z serwera
  //   }
  // };

  return (
    <Modal size='sm' show={props.loginModal} onHide={() => props.setEditModal(false)} aria-labelledby='confirm-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-modal'>{props.titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
          {(formik) => {
            const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid } = formik;

            return (
              <div className='container'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-12'>
                    <form onSubmit={handleSubmit} noValidate>
                      <input className='form-control mb-2' id='email' type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />

                      <input className='form-control mb-2' id='password' type='password' name='password' placeholder='Hasło' value={values.password} onChange={handleChange} onBlur={handleBlur} />

                      {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}

                      {errors.password && touched.password && <div className='alert alert-danger'>{errors.password}</div>}

                      <button className='btn btn-primary' type='submit'>
                        Zaloguj
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
