import React, { useContext } from "react";
import { StoreContext } from "../../../../../../store/StoreProvider";
import TablePrices from "../../../../../components/TablePrices";

import SectionTitle from "../../../../../components/fonts/SectionTitle";
import CommentText from "../../../../../components/fonts/CommentText";

const SectionPrices = ({ services }) => {
  // const { serviceList } = useContext(StoreContext);
  //   console.log(serviceList.services);

  return (
    <>
      <SectionTitle>Ceny usługi Mobile Salon</SectionTitle>
      <CommentText>Podane ceny są cenami brutto. Zawierają podatek VAT 8% lub 23%.</CommentText>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <TablePrices data={services} />
        </div>
      </div>
    </>
  );
};

export default SectionPrices;
