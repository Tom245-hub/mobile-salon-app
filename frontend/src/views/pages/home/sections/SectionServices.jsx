import React, { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import ZipCode from "../../../components/ZipCode";
import Card from "../../../components/Card";

const SectionServices = () => {
  const { serviceList } = useContext(StoreContext);

  const services = serviceList.map((item, index) => (
    <div key={index} className="col-3">
      <Card
        img={item.img}
        url={item.url}
        title={item.title}
        bgColorHover={true}
      />
    </div>
  ));

  return (
    <div className="SectionServices">
      <ZipCode />

      <div className="row">{services}</div>
    </div>
  );
};

export default SectionServices;
