import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";

import request from "../../../../../../utils/request";
import { StoreContext } from "../../../../../../store/StoreProvider";
import Image from "../../../../../components/Image";

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string().required("Musisz wpisać imię"),
    // img: Yup.string().required("Musisz adres url zdjęcia"),
    text: Yup.string().required("Musisz opis"),
    hairStylExp: Yup.string().required("Musisz wpisać ilość lat doświadczenia"),
    makeupStylExp: Yup.string().required("Musisz wpisać ilość lat doświadczenia"),
    city: Yup.string().required("Musisz wpisać oddział"),
  });

const EditModal = ({ editModal, setEditModal }) => {
  const { user, userLogged, setUserLogged } = useContext(StoreContext);
  const [errorServer, setErrorServer] = useState({ isTrue: false });
  const userData = userLogged.profileData;

  const initialValues = {
    title: userData.title,
    // img: userData.url,
    //    /img/stylist/warszawa/01-edyta/01-edyta.jpg
    text: userData.text,
    hairStylExp: userData.hairStylExp,
    makeupStylExp: userData.makeupStylExp,
    city: userData.city,
  };

  const submitForm = async (values) => {
    const editObject = {
      title: values.title,
      text: values.text,
      hairStylExp: values.hairStylExp,
      makeupStylExp: values.makeupStylExp,
      city: values.city,
    };

    await request
      .put(`/stylistsTest/${user.user_id}`, editObject)
      .then(({ data }) => {
        setUserLogged(data);
        setEditModal({ open: false });
        setErrorServer({ isTrue: false });
      })
      .catch((error) => {
        console.log(error);
        setErrorServer({ isTrue: true, info: "Bład serwera. Skontaktuj się z administratorem" });
      });
  };

  return (
    <>
      <Modal size='lg' show={editModal.open} onHide={() => setEditModal({ open: false })} aria-labelledby='confirm-modal'>
        <Modal.Header closeButton>
          <Modal.Title id='confirm-modal'>Edycja profilu</Modal.Title>
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
                        <input className='form-control mb-2' id='title' type='text' name='title' placeholder='Imię' value={values.title} onChange={handleChange} onBlur={handleBlur} />

                        {errors.title && touched.title && <div className='alert alert-danger'>{errors.title}</div>}

                        <div className='form-row my-2'>
                          <div className='col-md-6'>{<Image img={userData.img} height='75%' /> ?? "brak"}</div>
                          <div className='col-md-6'>
                            <input type='file' name='profileImg' className='mb-2' />
                          </div>
                        </div>

                        <textarea
                          className='form-control mb-2'
                          id='text'
                          type='text'
                          name='text'
                          placeholder='Opis'
                          value={values.text}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows='6'
                        ></textarea>

                        {errors.text && touched.text && <div className='alert alert-danger'>{errors.text}</div>}

                        <div className='form-row'>
                          <div className='col-md-6 d-flex align-items-center'>
                            <h6 className='mb-2'>Fryzury:</h6>
                          </div>
                          <div className='col-md-6'>
                            <select className='form-control mb-2' name='hairStylExp' value={values.hairStylExp} onChange={handleChange} onBlur={handleBlur}>
                              <option value='0'>Nie mam doświadczenia</option>
                              <option value='0.5'>6 miesięcy</option>
                              <option value='1'>1 rok</option>
                              <option value='2'>2 lata</option>
                              <option value='3'>3 lata</option>
                              <option value='4'>4 lata</option>
                              <option value='5'>5 lat</option>
                              <option value='6'>6 lat</option>
                              <option value='7'>7 lat</option>
                              <option value='8'>8 lat</option>
                              <option value='9'>9 lat</option>
                              <option value='10'>10 lat</option>
                            </select>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='col-md-6 d-flex align-items-center'>
                            <h6 className='mb-2'>Makijaże:</h6>
                          </div>
                          <div className='col-md-6'>
                            <select className='form-control mb-2' name='makeupStylExp' value={values.makeupStylExp} onChange={handleChange} onBlur={handleBlur}>
                              <option value='0'>Nie mam doświadczenia</option>
                              <option value='0.5'>6 miesięcy</option>
                              <option value='1'>1 rok</option>
                              <option value='2'>2 lata</option>
                              <option value='3'>3 lata</option>
                              <option value='4'>4 lata</option>
                              <option value='5'>5 lat</option>
                              <option value='6'>6 lat</option>
                              <option value='7'>7 lat</option>
                              <option value='8'>8 lat</option>
                              <option value='9'>9 lat</option>
                              <option value='10'>10 lat</option>
                            </select>
                          </div>
                        </div>

                        {errors.hairStylExp && touched.hairStylExp && <div className='alert alert-danger'>{errors.hairStylExp}</div>}

                        {errors.makeupStylExp && touched.makeupStylExp && <div className='alert alert-danger'>{errors.makeupStylExp}</div>}

                        <select className='form-control mb-2' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}>
                          <option value='null'>Nie wybrano</option>
                          <option value='Warszawa'>Warszawa</option>
                          <option value='Kraków'>Kraków</option>
                          <option value='Wrocław'>Wrocław</option>
                          <option value='Poznań'>Poznań</option>
                          <option value='Gdańsk'>Gdańsk</option>
                        </select>

                        {errors.city && touched.city && <div className='alert alert-danger'>{errors.city}</div>}

                        {errorServer.isTrue && <div className='alert alert-danger'>{errorServer.info}</div>}

                        <button className='btn btn-primary mr-1' type='submit'>
                          Zapisz
                        </button>
                        <button onClick={() => setEditModal({ open: false })} className='btn btn-warning mr-1' type='button'>
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
    </>
  );
};

export default EditModal;
