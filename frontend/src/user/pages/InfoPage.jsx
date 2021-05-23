import React from "react";

import PageTitle from "../../shared/components/UIElements/PageTitle";

const Info = ({}) => {
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
