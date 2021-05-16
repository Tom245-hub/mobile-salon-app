import React from "react";

const SectionFilters = () => {
  return (
    <>
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-12 col-md-8'>
          <ul className='d-flex justify-content-between'>
            <li>WARSZAWA</li>
            <li>KRAKÓW</li>
            <li>WROCŁAW</li>
            <li>POZNAŃ</li>
            <li>GDAŃSK</li>
          </ul>
        </div>
      </div>
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-12 col-md-8'>
          <ul className='d-flex justify-content-center'>
            <li className='mx-2'>fryzjerka</li>
            <li className='mx-2'>wizażystka</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionFilters;
