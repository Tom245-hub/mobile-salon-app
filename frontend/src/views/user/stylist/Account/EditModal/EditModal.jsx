import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

import request from "../../../../../utils/request";
import { StoreContext } from "../../../../../store/StoreProvider";

const validationSchema = () =>
  Yup.object().shape({
    editText: Yup.string().required("Musisz wpisać treść"),
  });

const EditModal = (props) => {
  const { user, setUser, setUserLogged } = useContext(StoreContext);

  // const history = useHistory();
  const initialValues = {
    editText: props.editModal.value,
  };

  const submitForm = async (values) => {
    const editObject = {
      editText: values.editText,
    };

    const { data, status } = await request.put(`/stylistsTest/${user.user_id}`, editObject);
    // console.log(data);
    setUserLogged(data);
    props.setEditModal({ open: false });
  };

  return (
    <Modal size='lg' show={props.editModal.open} onHide={() => props.setEditModal({ open: false })} aria-labelledby='confirm-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-modal'>Edycja: {props.editModal.name}</Modal.Title>
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

                      <button className='btn btn-primary mr-1' type='submit'>
                        Zapisz
                      </button>
                      <button onClick={() => props.setEditModal({ open: false })} className='btn btn-warning mr-1' type='button'>
                        Anuluj
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
