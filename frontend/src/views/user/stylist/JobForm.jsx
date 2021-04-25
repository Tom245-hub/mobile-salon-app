import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .required("Musisz wpisać swoje imię")
      .min(2, "Imię jest za krótkie")
      .max(20, "Imię jest za długie"),
    lastName: Yup.string()
      .required("Musisz wpisać swoje nazwisko")
      .min(2, "Nazwisko musi być dłużesze")
      .max(20, "Nazwisko jest za długie"),
    phone: Yup.string()
      .required("Musisz wpisać numer telefonu")
      .min(9, "Telefon musi być dłuższy")
      .max(15, "Telefon jest za długi"),
    email: Yup.string()
      .required("Musisz wpisać email")
      .email("Niepoprawny adres email"),
  });

const JobForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const submitForm = (values) => {
    console.log(values);
  };

  return (
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
          <div className="container min-vh-100 py-5">
            <div className="row d-flex justify-content-center py-5">
              <div className="col-6">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row d-flex justify-content-center mb-3">
                    <h3>Twoje dane</h3>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <input
                        className={
                          "form-control mb-2" +
                          (formik.errors.firstName && touched.firstName
                            ? " has-error"
                            : "")
                        }
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Imię"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col">
                      <input
                        className={
                          "form-control mb-2" +
                          (formik.errors.lastName && touched.lastName
                            ? " has-error"
                            : "")
                        }
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Nazwisko"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="form-row mb-5">
                    <div className="col">
                      <input
                        className={
                          "form-control mb-2" +
                          (formik.errors.email && touched.phone
                            ? " has-error"
                            : "")
                        }
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col">
                      <input
                        className={
                          "form-control mb-2" +
                          (formik.errors.phone && touched.phone
                            ? " has-error"
                            : "")
                        }
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Telefon"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  {errors.firstName && touched.firstName && (
                    <div className="alert alert-danger">{errors.firstName}</div>
                  )}

                  {errors.lastName && touched.lastName && (
                    <div className="alert alert-danger">{errors.lastName}</div>
                  )}

                  {errors.email && touched.email && (
                    <div className="alert alert-danger">{errors.email}</div>
                  )}

                  {errors.phone && touched.phone && (
                    <div className="alert alert-danger">{errors.phone}</div>
                  )}

                  <div className="form-row d-flex justify-content-center mb-3">
                    <h3>Doświadczenie</h3>
                  </div>

                  <div className="form-row">
                    <div className="col d-flex align-items-center">
                      <h6 className="mb-2">
                        Ile lat zajmujesz się stylizacją fryzur?
                      </h6>
                    </div>
                    <div className="col">
                      <select className="form-control mb-2">
                        <option>Nie mam doświadczenia</option>
                        <option>6 miesięcy</option>
                        <option>1 rok</option>
                        <option>2 lata</option>
                        <option>3 lata</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mb-5">
                    <div className="col d-flex align-items-center">
                      <h6 className="mb-2">
                        Ile lat zajmujesz się stylizacją makijaży?
                      </h6>
                    </div>
                    <div className="col">
                      <select className="form-control mb-2">
                        <option>Nie mam doświadczenia</option>
                        <option>6 miesięcy</option>
                        <option>1 rok</option>
                        <option>2 lata</option>
                        <option>3 lata</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row d-flex justify-content-center mb-3">
                    <h3>Informacje o usługach</h3>
                  </div>

                  <div className="form-row">
                    <div className="col d-flex align-items-center">
                      <h6 className="mb-2">
                        W jakim oddziale chcesz pracować?
                      </h6>
                    </div>
                    <div className="col">
                      <select className="form-control mb-2">
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Poznań</option>
                        <option>Gdańsk</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mb-5">
                    <div className="col d-flex align-items-center">
                      <h6 className="mb-2">
                        Dodaj 5 zdjęć swoich najlepszych prac
                      </h6>
                    </div>
                    <div className="col">
                      <input type="file" className="form-control-file mb-2" />
                      <input type="file" className="form-control-file mb-2" />
                      <input type="file" className="form-control-file mb-2" />
                      <input type="file" className="form-control-file mb-2" />
                      <input type="file" className="form-control-file mb-2" />
                    </div>
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Wyslij
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default JobForm;
