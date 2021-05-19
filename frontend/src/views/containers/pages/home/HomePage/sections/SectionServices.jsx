import React, { useContext } from "react";
import { StoreContext } from "../../../../../../store/StoreProvider";

import ZipCode from "../../../../../components/ZipCode";
import Card from "../../../../../components/Card";
import SectionTitle from "../../../../../components/fonts/SectionTitle";

const SectionServices = () => {
  const { categoryList } = useContext(StoreContext);

  return (
    <>
      <ZipCode />
      <SectionTitle>Poznaj nasze usługi</SectionTitle>
      <div className='row'>
        {categoryList.map((item, index) => (
          <div key={index} className='col-3'>
            <Card img={item.img} url={item.url} title={item.title} bgColorHover={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionServices;
