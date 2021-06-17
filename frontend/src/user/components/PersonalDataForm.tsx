import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { editStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import { values } from "../../shared/models/valuesModel";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import { StyledContainer, StyledForm, StyledSubtitle } from "./JobForm.css";

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
    email: Yup.string().required("Musisz wpisać email").email("Niepoprawny adres email"),
  });

const JobForm: React.FC = () => {
  const dispatch = useDispatch();
  const stylist = useSelector((state: RootState) => state.stylist.data);

  console.log(stylist);

  const initialValues: any = {
    firstName: stylist.personalData.firstName,
    lastName: stylist.personalData.lastName,
    email: stylist.personalData.email,
    phone: stylist.personalData.phone,
  };

  const submitForm = (values: any) => {
    const stylistObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    };

    dispatch(editStylist(stylist._id, stylistObject));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
          formik;

        return (
          <StyledContainer>
            <StyledForm onSubmit={handleSubmit} noValidate>
              <StyledSubtitle>Twoje dane</StyledSubtitle>

              <Input
                id='firstName'
                type='text'
                name='firstName'
                placeholder='Imię'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              />

              <Input
                id='lastName'
                type='text'
                name='lastName'
                placeholder='Nazwisko'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              />

              <Input
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              />

              <Input
                id='phone'
                name='phone'
                type='text'
                placeholder='Telefon'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              />

              {errors.firstName && touched.firstName && (
                <InfoValid variant='negative' margin='0'>
                  {errors.firstName}
                </InfoValid>
              )}
              {errors.lastName && touched.lastName && (
                <InfoValid variant='negative' margin='0'>
                  {errors.lastName}
                </InfoValid>
              )}
              {errors.email && touched.email && (
                <InfoValid variant='negative' margin='0'>
                  {errors.email}
                </InfoValid>
              )}
              {errors.phone && touched.phone && (
                <InfoValid variant='negative' margin='0'>
                  {errors.phone}
                </InfoValid>
              )}

              <Button type='submit'>Zapisz</Button>
              <Button type='button' variant='cancel'>
                Anuluj
              </Button>

              {/* {infoServer && infoServer.status && (
                <InfoValid variant='positive'>{infoServer.message}</InfoValid> */}
              {/* )} */}
            </StyledForm>
          </StyledContainer>
        );
      }}
    </Formik>
  );
};

export default JobForm;
