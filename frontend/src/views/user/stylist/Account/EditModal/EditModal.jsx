import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

// import request from "../../../../../utils/request";
// import { StoreContext } from "../../../../../store/StoreProvider";

const validationSchema = () =>
  Yup.object().shape({
    text: Yup.string().required("Musisz wpisać treść"),
  });

const EditModal = (props) => {
  // const { user, setUser } = useContext(StoreContext);

  // const history = useHistory();
  const initialValues = {
    editText: "",
  };

  const submitForm = async (values) => {
    const editObject = {
      editText: values.editText,
    };
    console.log(editObject);
  };

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
    <Modal size='lg' show={props.editModalOpen} onHide={() => props.setEditModalOpen(false)} aria-labelledby='confirm-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-modal'>Edycja: /nazwa pola/</Modal.Title>
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
                      <input className='form-control mb-2' id='editText' type='text' name='editText' placeholder='Tekst' value={values.editText} onChange={handleChange} onBlur={handleBlur} />

                      {errors.editText && touched.editText && <div className='alert alert-danger'>{errors.editText}</div>}

                      <button className='btn btn-primary' type='submit'>
                        Zapisz
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
