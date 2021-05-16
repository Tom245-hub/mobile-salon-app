import React from "react";
import FormGroup from "../../../../../components/FormGroup";
import SectionTitle from "../../../../../components/fonts/SectionTitle";

const SectionConsult = () => {
  return (
    <>
      <SectionTitle>Konsultacje telefoniczne</SectionTitle>
      <div className='row d-flex justify-content-center'>
        <div className='col-10 col-md-6'>
          <FormGroup placeholder='Twój telefon' btnText='Zamów konsultację' />
        </div>
      </div>
    </>
  );
};

export default SectionConsult;
