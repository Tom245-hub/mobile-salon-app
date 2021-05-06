import React, { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";
import TablePrices from "../../../components/TablePrices";

import { PageSubTitle } from "../../../components/Title";

const SectionPrices = () => {
  const { serviceList } = useContext(StoreContext);
  //   console.log(serviceList.services);

  return (
    <>
      <PageSubTitle>Ceny usługi Mobile Salon</PageSubTitle>
      <h6 className='text-center mb-5'>Podane ceny są cenami brutto. Zawierają podatek VAT 8% lub 23%.</h6>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <TablePrices data={serviceList} />
        </div>
      </div>
    </>
  );
};

export default SectionPrices;
