import React, { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import Card from "../../../components/Card";
import ImageHero from "../../../components/ImageHero";
import { PageTitle, PageSubTitle } from "../../../components/Title";
import SectionPrices from "./SectionPrices";

const ServicesListPage = () => {
  const { categoryList } = useContext(StoreContext);

  return (
    <>
      <div className='container-fluid p-0 mb-5'>
        <ImageHero title='Poznaj nasze usługi' img='/img/makijaze-slubne-mobile-salon.jpg' height='25%' />
      </div>
      <div className='container mb-5'>
        <PageTitle>Poznaj usługi Mobile Salon</PageTitle>
        <h4 className='text-center'>Zamów i wygodnie korzystaj z usług z dojazdem do domu, biura lub hotelu.</h4>
      </div>
      <div className='container mb-5'>
        <div className='row'>
          {categoryList.map((item, index) => (
            <div key={index} className='col'>
              <Card img={item.img} url={item.url} title={item.title} text={item.text} bgColorHover={false} />
            </div>
          ))}
        </div>
      </div>
      <div className='container-fluid bg-light py-5 mb-5'>
        <div className='container'>
          <SectionPrices />
        </div>
      </div>
      <div className='container py-5 mb-5'>
        <PageSubTitle>Co jeszcze mamy w ofercie?</PageSubTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-8'>Bony podarunkowe, usługi dla firm</div>
        </div>
      </div>
    </>
  );
};

export default ServicesListPage;
