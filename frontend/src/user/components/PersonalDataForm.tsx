import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { editStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import { values } from "../../shared/models/valuesModel";

import Input from "../../shared/components/FormElements/Input";
import Select from "../../shared/components/FormElements/Select";
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
    birthYear: Yup.string().required("Musisz wpisać rok urodzenia"),
    zipcode: Yup.string().required("Musisz wpisać kod pocztowy"),
  });

const JobForm: React.FC = () => {
  const dispatch = useDispatch();
  const user: any = useSelector((state: RootState) => state.user.user.user);
  const stylist: any = useSelector(
    (state: RootState) => state.stylist.stylist.personalData
  );
  // const infoServer: any = useSelector((state: RootState) => state.stylist.info);
  // console.log(infoServer);

  // if (user.isLogged && user.user.user.accessLevel === 1) {
  //   //
  // } else if (user.isLogged && user.user.user.accessLevel === 2) {
  //   //
  // } else {
  //   //
  // }

  const initialValues: values = {
    firstName: stylist.firstName,
    lastName: stylist.lastName,
    email: stylist.email,
    phone: stylist.phone,
    birthYear: stylist.birthYear,
    zipcode: stylist.zipcode,

    hairStylExp: 0,
    makeupStylExp: 0,
    city: "",
  };

  const submitForm = async (values: values) => {
    const stylistObject = {
      id: user.stylistData._id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      birthYear: values.birthYear,
      zipcode: values.zipcode,
    };

    dispatch(editStylist(stylistObject));
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

              <Input
                id='birthYear'
                type='text'
                name='birthYear'
                placeholder='Rok urodzenia'
                value={values.birthYear}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              />

              <Input
                id='zipcode'
                placeholder='Kod pocztowy'
                name='zipcode'
                type='text'
                value={values.zipcode}
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
