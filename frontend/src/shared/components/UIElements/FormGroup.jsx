import React from "react";

const FormGroup = (props) => {
  return (
    <div className='input-group'>
      <input className='form-control' type='email' placeholder={props.placeholder} />
      <div className='input-group-append'>
        <button className='btn btn-primary' type='button'>
          {props.btnText}
        </button>
      </div>
    </div>
  );
};

export default FormGroup;
