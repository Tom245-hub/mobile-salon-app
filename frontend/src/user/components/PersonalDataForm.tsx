import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { editStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import {
  StyledContainer,
  StyledForm,
  StyledSubtitle,
  StyledRowButtons,
  StyledComment,
  StyledTitle,
} from "./PersonalDataForm.css";

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
    birthYear: stylist.personalData.birthYear,

    city: stylist.personalData.address.city,
    zipcode: stylist.personalData.address.zipcode,
    street: stylist.personalData.address.street,
    numberBuild: stylist.personalData.address.numberBuild,
    numberLocal: stylist.personalData.address.numberLocal,
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
            <StyledTitle>Twoje dane personalne</StyledTitle>
            <StyledComment>
              Te informacje dostępne są dla Mobile Salon. Nie są widoczne w Twoim profilu
              publicznym. Klientki nie mają do nich dostępu.
            </StyledComment>
            <StyledForm onSubmit={handleSubmit} noValidate>
              <div>
                <StyledSubtitle>Twoje dane</StyledSubtitle>

                <StyledComment>
                  Zdarza się, że potrzebujemy Twojego numeru telefonu lub emaila do
                  szybkiego kontaktu z Tobą lub do przesłania dokumentów.
                </StyledComment>

                <label htmlFor='firstName'>
                  Imię:
                  <Input
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='Imię'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
                {errors.firstName && touched.firstName && (
                  <InfoValid variant='negative' margin='0'>
                    {errors.firstName}
                  </InfoValid>
                )}

                <label htmlFor='lastName'>
                  Nazwisko:
                  <Input
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder='Nazwisko'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
                {errors.lastName && touched.lastName && (
                  <InfoValid variant='negative' margin='0'>
                    {errors.lastName}
                  </InfoValid>
                )}

                <label htmlFor='email'>
                  Email:
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
                {errors.email && touched.email && (
                  <InfoValid variant='negative' margin='0'>
                    {errors.email}
                  </InfoValid>
                )}

                <label htmlFor='phone'>
                  Telefon:
                  <Input
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='Telefon'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
                {errors.phone && touched.phone && (
                  <InfoValid variant='negative' margin='0'>
                    {errors.phone}
                  </InfoValid>
                )}

                <label htmlFor='birthYear'>
                  Data urodzenia:
                  <Input
                    id='birthYear'
                    name='birthYear'
                    type='text'
                    placeholder='Wprowadź datę'
                    value={values.birthYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
              </div>
              <div>
                <StyledSubtitle>Twój adres</StyledSubtitle>
                <StyledComment>
                  Na podstawie Twojego kodu pocztowego będziemy przypisywać zamówienia jak
                  najbliżej Twojej lokalizacji.
                </StyledComment>

                <label htmlFor='city'>
                  Miejscowość:
                  <Input
                    id='city'
                    type='text'
                    name='city'
                    placeholder='Miasto'
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>

                <label htmlFor='zipcode'>
                  Kod pocztowy:
                  <Input
                    id='zipcode'
                    type='text'
                    name='zipcode'
                    placeholder='Kod pocztowy'
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>

                <label htmlFor='street'>
                  Ulica:
                  <Input
                    id='street'
                    type='text'
                    name='street'
                    placeholder='Ulica'
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>

                <label htmlFor='numberBuild'>
                  Numer budynku:
                  <Input
                    id='numberBuild'
                    name='numberBuild'
                    type='text'
                    placeholder='Numer budynku'
                    value={values.numberBuild}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>

                <label htmlFor='numberLocal'>
                  Numer mieszkania:
                  <Input
                    id='numberLocal'
                    name='numberLocal'
                    type='text'
                    placeholder='Numer mieszkania'
                    value={values.numberLocal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin='0 0 0.5rem 0'
                  />
                </label>
              </div>

              <div>
                <StyledSubtitle>Twoje dane firmowe</StyledSubtitle>
                <StyledComment>Czy prowadzisz Działalność Gospodarczą?</StyledComment>
              </div>

              <StyledRowButtons>
                <Button type='submit' margin='0 0.5rem' variant='confirm'>
                  Zapisz
                </Button>
                <Button type='button' margin='0 0.5rem' variant='cancel'>
                  Anuluj
                </Button>
              </StyledRowButtons>

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
