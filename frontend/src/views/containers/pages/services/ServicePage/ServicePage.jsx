import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import SectionPrices from "./sections/SectionPrices";
import SectionDesc from "./sections/SectionDesc";
import { StoreContext } from "../../../../../store/StoreProvider";
import ImageHero from "../../../../components/ImageHero";

const ServicePage = () => {
  const { categoryList, serviceList } = useContext(StoreContext);
  let { slug } = useParams();
  const category = categoryList.length > 0 && categoryList.filter((category) => category.slug == slug)[0];
  const services = serviceList.length > 0 && serviceList.filter((service) => service.category._id == category._id);
  console;
  return (
    <>
      <div className='container-fluid'>
        <ImageHero height='20%' img={category.img} title='Zarezerwuj usługe z dojazdem do domu lub hotelu' />
      </div>
      <div className='container py-5'>
        <SectionDesc category={category} />
      </div>
      <div className='container-fluid bg-light py-5'>
        <div className='container'>REALIZACJE</div>
      </div>
      <div className='container py-5'>{services && <SectionPrices services={services} />}</div>
    </>
  );
};

export default ServicePage;
