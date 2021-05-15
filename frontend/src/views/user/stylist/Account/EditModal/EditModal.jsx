import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

import request from "../../../../../utils/request";
import { StoreContext } from "../../../../../store/StoreProvider";

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required("Musisz wpisać imię"),
    lastName: Yup.string().required("Musisz wpisać nazwisko"),
    email: Yup.string().required("Musisz wpisać email"),
    phone: Yup.string().required("Musisz wpisać telefon"),
    birthYear: Yup.string().required("Musisz wpisać rok"),
    zipcode: Yup.string().required("Musisz wpisać kod pocztowy"),
    // city: Yup.string().required("Musisz wpisać miasto"),
  });

const EditModal = (props) => {
  const { user, userLogged, setUserLogged } = useContext(StoreContext);
  const userData = userLogged.personalData;

  // const history = useHistory();
  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    birthYear: userData.birthYear,
    zipcode: userData.zipcode,

    // city: userData.address.city,
    // zipcode: userData.address.zipcode,
    // street: userData.address.street,
    // numberBuild: userData.address.numberBuild,
    // numberLocal: userData.address.numberLocal,
    // company: userData.address.company,
    // NIP: userData.address.nip,
  };

  const submitForm = async (values) => {
    const editObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      birthYear: values.birthYear,
      zipcode: values.zipcode,

      city: values.city,
      // zipcode: values.address.zipcode,
      // street: values.address.street,
      // numberBuild: values.address.numberBuild,
      // numberLocal: values.address.numberLocal,
      // company: values.address.company,
      // NIP: values.address.nip,
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
                      <input className='form-control mb-2' id='firstName' type='text' name='firstName' placeholder='Imię' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />

                      {errors.firstName && touched.firstName && <div className='alert alert-danger'>{errors.firstName}</div>}

                      <input className='form-control mb-2' id='lastName' type='text' name='lastName' placeholder='Nazwisko' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />

                      {errors.lastName && touched.lastName && <div className='alert alert-danger'>{errors.lastName}</div>}

                      <input className='form-control mb-2' id='email' type='text' name='email' placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />

                      {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}

                      <input className='form-control mb-2' id='phone' type='text' name='phone' placeholder='Telefon' value={values.phone} onChange={handleChange} onBlur={handleBlur} />

                      {errors.phone && touched.phone && <div className='alert alert-danger'>{errors.phone}</div>}

                      <input className='form-control mb-2' id='birthYear' type='text' name='birthYear' placeholder='Rok' value={values.birthYear} onChange={handleChange} onBlur={handleBlur} />

                      {errors.birthYear && touched.birthYear && <div className='alert alert-danger'>{errors.birthYear}</div>}

                      <input className='form-control mb-2' id='zipcode' type='text' name='zipcode' placeholder='Kod pocztowy' value={values.zipcode} onChange={handleChange} onBlur={handleBlur} />

                      {errors.zipcode && touched.zipcode && <div className='alert alert-danger'>{errors.zipcode}</div>}

                      {/* <input className='form-control mb-2' id='city' type='text' name='city' placeholder='Miasto' value={values.city} onChange={handleChange} onBlur={handleBlur} />

                      {errors.city && touched.city && <div className='alert alert-danger'>{errors.city}</div>} */}

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

// import React, { useState, useContext } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Modal } from "react-bootstrap";
// // import { useHistory } from "react-router-dom";

// import request from "../../../../../utils/request";
// import { StoreContext } from "../../../../../store/StoreProvider";

// const validationSchema = () =>
//   Yup.object().shape({
//     editText: Yup.string().required("Musisz wpisać treść"),
//   });

// const EditModal = (props) => {
//   const { user, setUserLogged } = useContext(StoreContext);

//   // const history = useHistory();
//   const initialValues = {
//     editText: props.editModal.value,
//   };

//   const submitForm = async (values) => {
//     const editObject = {
//       editText: values.editText,
//     };

//     const { data, status } = await request.put(`/stylistsTest/${user.user_id}`, editObject);
//     // console.log(data);
//     setUserLogged(data);
//     props.setEditModal({ open: false });
//   };

//   return (
//     <Modal size='lg' show={props.editModal.open} onHide={() => props.setEditModal({ open: false })} aria-labelledby='confirm-modal'>
//       <Modal.Header closeButton>
//         <Modal.Title id='confirm-modal'>Edycja: {props.editModal.name}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
//           {(formik) => {
//             const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid } = formik;

//             return (
//               <div className='container'>
//                 <div className='row d-flex justify-content-center'>
//                   <div className='col-12'>
//                     <form onSubmit={handleSubmit} noValidate>
//                       <input className='form-control mb-2' id='editText' type='text' name='editText' placeholder='Tekst' value={values.editText} onChange={handleChange} onBlur={handleBlur} />

//                       {errors.editText && touched.editText && <div className='alert alert-danger'>{errors.editText}</div>}

//                       <button className='btn btn-primary mr-1' type='submit'>
//                         Zapisz
//                       </button>
//                       <button onClick={() => props.setEditModal({ open: false })} className='btn btn-warning mr-1' type='button'>
//                         Anuluj
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             );
//           }}
//         </Formik>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditModal;
