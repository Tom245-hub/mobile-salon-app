import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { RootState } from "../../data/reducers/rootReducers";
import { updateCity } from "../../data/actions/cityActions";
import { closeCityForm, openCityForm } from "../../data/actions/cityFormActions";

import InfoValid from "../FormElements/InfoValid";
import Modal from "../UIElements/Modal";
import Button from "../FormElements/Button";
import Select from "../FormElements/Select";

const validationSchema = () =>
  Yup.object().shape({
    city: Yup.string().required("Musisz wybrać miasto lub anulować"),
  });

const CityForm: React.FC = () => {
  const dispatch = useDispatch();
  const isEnterSlide = useSelector((state: RootState) => state.cityForm.isEnterSlide);

  const submitForm = async (values: { city: string }) => {
    const cityObject = {
      city: values.city,
    };
    dispatch(updateCity(cityObject));
    dispatch(closeCityForm());
  };

  const initialValues = {
    city: "",
  };

  return (
    <>
      <Modal
        header='Wybierz miasto'
        isEnterSlide={isEnterSlide}
        closePortal={() => dispatch(closeCityForm())}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => {
            const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
              formik;

            return (
              <form onSubmit={handleSubmit} noValidate>
                <Select
                  id='city'
                  name='city'
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value=''>Wybierz</option>
                  <option value='Warszawa'>Warszawa</option>
                  <option value='Kraków'>Kraków</option>
                  <option value='Wrocław'>Wrocław</option>
                  <option value='Gdańsk'>Gdańsk</option>
                  <option value='Poznań'>Poznań</option>
                </Select>

                {errors.city && touched.city && <InfoValid>{errors.city}</InfoValid>}
                <Button type='submit' variant='confirm' margin='0 0.5rem 0 0'>
                  Zapisz
                </Button>
                <Button
                  type='button'
                  variant='cancel'
                  onClick={() => dispatch(closeCityForm())}
                >
                  Anuluj
                </Button>
              </form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default CityForm;
