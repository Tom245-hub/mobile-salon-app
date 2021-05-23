import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormGroup from "./FormGroup";

/* API - start */
const zipcodeData = [
  {
    zipcode: "01",
  },
  {
    zipcode: "02",
  },
  {
    zipcode: "03",
  },
];
/* API - end */

const ZipCode = (props) => {
  const [zipCode, setZipCode] = useState(null);

  const handleSumbitNewsletter = (e) => {
    e.preventDefault();
    console.log("test");
  };

  return (
    <div className='row d-flex justify-content-center mb-5'>
      <div className='col-8 col-md-4'>
        <h5>Sprawdź czy do Ciebie dojeżdzamy</h5>
        <h6>wpisz swój kod pocztowy</h6>
      </div>

      <div className='col-8 col-md-4'>
        <form onSubmit={(e) => handleSumbitNewsletter(e)}>
          <FormGroup placeholder='Twój kod pocztowy' btnText='Sprawdź' />
        </form>
      </div>
    </div>
  );
};

export default ZipCode;
