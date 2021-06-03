import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { updateCity } from "../../data/actions/cityActions";

import InfoValid from "../FormElements/InfoValid";
import Modal from "../UIElements/Modal";
import Button from "../FormElements/Button";
import Select from "../FormElements/Select";

const validationSchema = () =>
  Yup.object().shape({
    city: Yup.string().required("Musisz wybrać miasto lub anulować"),
  });

interface CityFormProps {
  isEnterSlide: boolean;
  toggleOpenPortal: () => void;
}

const CityForm: React.FC<CityFormProps> = ({ isEnterSlide, toggleOpenPortal }) => {
  const dispatch = useDispatch();

  const submitForm = async (values: { city: string }) => {
    const cityObject = {
      city: values.city,
    };
    dispatch(updateCity(cityObject));
    toggleOpenPortal();
  };
  const initialValues = {
    city: "",
  };
  return (
    <>
      <Modal
        header='Wybierz miasto'
        isEnterSlide={isEnterSlide}
        toggleOpenPortal={toggleOpenPortal}
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
                <Button type='button' variant='cancel' onClick={toggleOpenPortal}>
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
