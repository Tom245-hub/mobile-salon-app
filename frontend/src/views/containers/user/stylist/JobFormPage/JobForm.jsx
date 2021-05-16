import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import request from "../../../../../utils/request";
import { StoreContext } from "../../../../../store/StoreProvider";

import InfoModal from "../../../modals/InfoModal/InfoModal";

import { Button, OverlayTrigger, Tooltip, Form, InputGroup, Col, Container, Row } from "react-bootstrap";

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required("Musisz wpisać swoje imię").min(2, "Imię jest za krótkie").max(20, "Imię jest za długie"),
    lastName: Yup.string().required("Musisz wpisać swoje nazwisko").min(2, "Nazwisko musi być dłużesze").max(20, "Nazwisko jest za długie"),
    phone: Yup.string().required("Musisz wpisać numer telefonu").min(9, "Telefon musi być dłuższy").max(15, "Telefon jest za długi"),
    email: Yup.string().required("Musisz wpisać email").email("Niepoprawny adres email"),
    birthYear: Yup.string().required("Musisz wpisać rok urodzenia"),
    zipcode: Yup.string().required("Musisz wpisać kod pocztowy"),
  });

const JobForm = () => {
  const { setStylistList } = useContext(StoreContext);
  const [infoModal, setInfoModal] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthYear: "",
    zipcode: "",
  };

  const submitForm = async (values) => {
    const stylistObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      birthYear: values.birthYear,
      zipcode: values.zipcode,
      hairStylExp: values.hairStylExp,
      makeupStylExp: values.makeupStylExp,
      city: values.city,
    };

    // console.log(stylistObject);

    const { data, status } = await request.post("/stylistsTest", stylistObject);
    // console.log(stylistObject);
    // if (status === 201) {
    //   setStylistList(data.stylists);
    //   setInfoModal(true);
    // }
  };

  return (
    <>
      <InfoModal
        setInfoModal={setInfoModal}
        infoModal={infoModal}
        titleText='Potwierdzenie wysłania aplikacji'
        bodyText='Dziękujemy za przesłanie aplikacji. Na adres email otrzymasz dalsze informacje.'
      />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid } = formik;

          return (
            <div className='container min-vh-100 py-5'>
              <div className='row d-flex justify-content-center py-5'>
                <div className='col-md-6'>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className='form-row d-flex justify-content-center mb-3'>
                      <h3>Twoje dane</h3>
                    </div>
                    <div className='form-row'>
                      <div className='col-md-6'>
                        <input className='form-control mb-2' id='firstName' type='text' name='firstName' placeholder='Imię' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      <div className='col-md-6'>
                        <input className='form-control mb-2' id='lastName' type='text' name='lastName' placeholder='Nazwisko' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='col-md-6'>
                        <input className='form-control mb-2' id='email' type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      <div className='col-md-6'>
                        <input className='form-control mb-2' id='phone' name='phone' type='number' placeholder='Telefon' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                    </div>
                    <div className='form-row mb-5'>
                      <div className='col-md-6'>
                        <input
                          className='form-control mb-2'
                          id='birthYear'
                          type='number'
                          name='birthYear'
                          placeholder='Rok urodzenia'
                          value={values.birthYear}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className='col-md-6'>
                        <InputGroup className='mb-2 mr-sm-2'>
                          <input className='form-control' id='zipcode' placeholder='Kod pocztowy' name='zipcode' type='text' value={values.zipcode} onChange={handleChange} onBlur={handleBlur} />
                          <InputGroup.Append>
                            <InputGroup.Text>
                              <OverlayTrigger placement='top' overlay={<Tooltip id='tooltip-top'>Na podstawie kodu pocztowego będziemy przypisywać zamówienia do Twojego konta.</Tooltip>}>
                                <FontAwesomeIcon icon={faQuestionCircle} />
                              </OverlayTrigger>
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </div>
                    </div>
                    {errors.firstName && touched.firstName && <div className='alert alert-danger'>{errors.firstName}</div>}
                    {errors.lastName && touched.lastName && <div className='alert alert-danger'>{errors.lastName}</div>}
                    {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}
                    {errors.phone && touched.phone && <div className='alert alert-danger'>{errors.phone}</div>}

                    <div className='form-row d-flex justify-content-center mb-3'>
                      <h3>Doświadczenie</h3>
                    </div>
                    <div className='form-row'>
                      <div className='col-md-6 d-flex align-items-center'>
                        <h6 className='mb-2'>Ile lat zajmujesz się stylizacją fryzur?</h6>
                      </div>
                      <div className='col-md-6'>
                        <select className='form-control mb-2' name='hairStylExp' value={values.hairStylExp} onChange={handleChange} onBlur={handleBlur}>
                          <option value='0'>Nie mam doświadczenia</option>
                          <option value='0.5'>6 miesięcy</option>
                          <option value='1'>1 rok</option>
                          <option value='2'>2 lata</option>
                          <option value='3'>3 lata</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-row mb-5'>
                      <div className='col-md-6 d-flex align-items-center'>
                        <h6 className='mb-2'>Ile lat zajmujesz się stylizacją makijaży?</h6>
                      </div>
                      <div className='col-md-6'>
                        <select className='form-control mb-2' name='makeupStylExp' value={values.makeupStylExp} onChange={handleChange} onBlur={handleBlur}>
                          <option value='0'>Nie mam doświadczenia</option>
                          <option value='0.5'>6 miesięcy</option>
                          <option value='1'>1 rok</option>
                          <option value='2'>2 lata</option>
                          <option value='3'>3 lata</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-row d-flex justify-content-center mb-3'>
                      <h3>Informacje o usługach</h3>
                    </div>
                    <div className='form-row'>
                      <div className='col-md-6 d-flex align-items-center'>
                        <h6 className='mb-2'>W jakim oddziale chcesz pracować?</h6>
                      </div>
                      <div className='col-md-6'>
                        <select className='form-control mb-2' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}>
                          <option value='null'>Nie wybrano</option>
                          <option value='Warszawa'>Warszawa</option>
                          <option value='Kraków'>Kraków</option>
                          <option value='Wrocław'>Wrocław</option>
                          <option value='Poznań'>Poznań</option>
                          <option value='Gdańsk'>Gdańsk</option>
                        </select>
                      </div>
                    </div>
                    {Number(values.hairStylExp) > 0 && (
                      <div className='form-row mb-5'>
                        <div className='col-md-6 d-flex align-items-center'>
                          <h6 className='mb-2'>Dodaj min. 3 zdjęcia swoich najlepszych fryzur</h6>
                        </div>
                        <div className='col-md-6'>
                          <input type='file' name='fileHair1' className='mb-2' />
                          <input type='file' name='fileHair2' className='mb-2' />
                          <input type='file' name='fileHair3' className='mb-2' />
                        </div>
                      </div>
                    )}
                    {Number(values.makeupStylExp) > 0 && (
                      <div className='form-row mb-5'>
                        <div className='col-md-6 d-flex align-items-center'>
                          <h6 className='mb-2'>Dodaj min. 3 zdjęcia swoich najlepszych makijaży</h6>
                        </div>
                        <div className='col-md-6'>
                          <input type='file' name='fileMakeup1' className='mb-2' />
                          <input type='file' name='fileMakeup2' className='mb-2' />
                          <input type='file' name='fileMakeup3' className='mb-2' />
                        </div>
                      </div>
                    )}
                    <button className='btn btn-primary' type='submit'>
                      Wyślij
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default JobForm;
