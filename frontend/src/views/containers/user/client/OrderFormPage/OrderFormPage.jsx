import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import request from "../../../../../utils/request";

import { StoreContext } from "../../../../../store/StoreProvider";

import InfoModal from "../../../modals/InfoModal/InfoModal";

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required("Musisz wpisać swoje imię"),
    //   .min(2, "Imię jest za krótkie")
    //   .max(20, "Imię jest za długie"),
    lastName: Yup.string().required("Musisz wpisać swoje nazwisko"),
    //   .min(2, "Nazwisko musi być dłużesze")
    //   .max(20, "Nazwisko jest za długie"),
    phone: Yup.string().required("Musisz wpisać numer telefonu"),
    //   .min(9, "Telefon musi być dłuższy")
    //   .max(15, "Telefon jest za długi"),
    email: Yup.string().required("Musisz wpisać email"),
    //   .email("Niepoprawny adres email"),
  });

const OrderFormPage = () => {
  const { setOrderList } = useContext(StoreContext);

  const [infoModal, setInfoModal] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const submitForm = async (values) => {
    const orderObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    };

    console.log(orderObject);

    const { data, status } = await request.post("/orders", orderObject);
    if (status === 201) {
      setOrderList(data.orders);
      setInfoModal(true);
    }
  };

  return (
    <>
      <InfoModal
        setInfoModal={setInfoModal}
        infoModal={infoModal}
        titleText='Potwierdzenie wysłania zamówienia'
        bodyText='Dziękujemy za przesłanie zamówienia. Na adres email otrzymasz dalsze
        informacje.'
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

                    {errors.firstName && touched.firstName && <div className='alert alert-danger'>{errors.firstName}</div>}
                    {errors.lastName && touched.lastName && <div className='alert alert-danger'>{errors.lastName}</div>}
                    {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}
                    {errors.phone && touched.phone && <div className='alert alert-danger'>{errors.phone}</div>}

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

export default OrderFormPage;
