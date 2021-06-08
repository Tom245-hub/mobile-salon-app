import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { postStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import { values } from "../../shared/models/valuesModel";

import Input from "../../shared/components/FormElements/Input";
import Select from "../../shared/components/FormElements/Select";
import Button from "../../shared/components/FormElements/Button";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import {
  StyledContainer,
  StyledTitle,
  StyledComment,
  StyledForm,
  StyledSubtitle,
  StyledText,
  StyledLine,
  StyledBox,
  StyledCommentText,
} from "./JobForm.css";

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
  const infoServer: any = useSelector((state: RootState) => state.stylist.info);
  console.log(infoServer);

  const initialValues: values = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthYear: "",
    zipcode: "",
    hairStylExp: 0,
    makeupStylExp: 0,
    city: "",
  };

  const submitForm = async (values: values) => {
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

    dispatch(postStylist(stylistObject));
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
            <StyledTitle>Dołącz do nas</StyledTitle>
            <StyledComment>
              Wypełnij formularz i załóż konto w Mobile Salon. Po weryfikacji Twojego
              doświadczenia wyślemy informacje o warunkach współpracy na Twój adres email.
            </StyledComment>

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

              <StyledLine />

              <StyledSubtitle>Doświadczenie</StyledSubtitle>

              <StyledText>Ile lat zajmujesz się stylizacją fryzur?</StyledText>

              <Select
                id='hairStylExp'
                name='hairStylExp'
                value={values.hairStylExp}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              >
                <option value='0'>Nie mam doświadczenia</option>
                <option value='0.5'>6 miesięcy</option>
                <option value='1'>1 rok</option>
                <option value='2'>2 lata</option>
                <option value='3'>3 lata</option>
              </Select>

              <StyledText>Ile lat zajmujesz się stylizacją makijaży?</StyledText>

              <Select
                id='makeupStylExp'
                name='makeupStylExp'
                value={values.makeupStylExp}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              >
                <option value='0'>Nie mam doświadczenia</option>
                <option value='0.5'>6 miesięcy</option>
                <option value='1'>1 rok</option>
                <option value='2'>2 lata</option>
                <option value='3'>3 lata</option>
              </Select>

              <StyledLine />

              <StyledSubtitle>Informacje o usługach</StyledSubtitle>

              <StyledText>W jakim oddziale chcesz pracować?</StyledText>

              <Select
                id='city'
                name='city'
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                margin='0'
              >
                <option value='null'>Nie wybrano</option>
                <option value='Warszawa'>Warszawa</option>
                <option value='Kraków'>Kraków</option>
                <option value='Wrocław'>Wrocław</option>
                <option value='Poznań'>Poznań</option>
                <option value='Gdańsk'>Gdańsk</option>
              </Select>

              {Number(values.hairStylExp) > 0 && (
                <>
                  <StyledText>Dodaj min. 3 zdjęcia swoich najlepszych fryzur</StyledText>
                  <div>
                    <input type='file' name='fileHair1' />
                    <input type='file' name='fileHair2' />
                    <input type='file' name='fileHair3' />
                  </div>
                </>
              )}
              {Number(values.makeupStylExp) > 0 && (
                <>
                  <StyledText>
                    Dodaj min. 3 zdjęcia swoich najlepszych makijaży
                  </StyledText>
                  <div>
                    <input type='file' name='fileMakeup1' className='mb-2' />
                    <input type='file' name='fileMakeup2' className='mb-2' />
                    <input type='file' name='fileMakeup3' className='mb-2' />
                  </div>
                </>
              )}

              <StyledLine />

              <StyledBox>
                <StyledCommentText>
                  Firma Mobile Salon pełni funkcję administratora danych osobowych
                  klientów platformy internetowej www.mobilesalon.pl. Twoje dane osobowe
                  są zbierane i przetwarzane w celu rozważania możliwości nawiązania
                  współpracy. Masz prawo dostępu do informacji, które Cię dotyczą,
                  poprawiania, usuwania i przekazywania ich, jak również prawo do
                  wyrażenia sprzeciwu i ograniczenia ich przetwarzania. Możesz skorzystać
                  z tego prawa, kontaktując się z nami.
                </StyledCommentText>
                <Button type='submit'>Wyślij</Button>
              </StyledBox>
              {infoServer && infoServer.status && (
                <InfoValid variant='positive'>{infoServer.message}</InfoValid>
              )}
            </StyledForm>
          </StyledContainer>
        );
      }}
    </Formik>
  );
};

export default JobForm;
