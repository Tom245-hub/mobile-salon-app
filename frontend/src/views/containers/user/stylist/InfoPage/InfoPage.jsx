import React from "react";

import PageTitle from "../../../../components/fonts/PageTitle";

const Info = (props) => {
  return (
    <div className='container-fluid my-5'>
      <PageTitle>Informacje</PageTitle>
      <div className='row'>
        <div className='col-3'>20 czerwiec 2021</div>
        <div className='col-6'>Masz nowe zamówienie</div>
      </div>
    </div>
  );
};

export default Info;
