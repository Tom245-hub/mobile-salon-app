import React, { useContext } from "react";
import { StoreContext } from "../../shared/store/StoreProvider";

import Card from "../../shared/components/UIElements/Card";
import ImageHero from "../../shared/components/UIElements/ImageHero";
import PageTitle from "../../shared/components/UIElements/PageTitle";
import SectionTitle from "../../shared/components/UIElements/SectionTitle";

const ServicesListPage = () => {
  const { categoryList, serviceList } = useContext(StoreContext);

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
          {categoryList.map((category) => (
            <div key={category._id} className='col'>
              <Card img={category.img} url={category.url} title={category.title} text={category.text} />
            </div>
          ))}
        </div>
      </div>

      <div className='container-fluid bg-light py-5 mb-5'>
        <div className='container'>
          <SectionTitle>Ceny usługi Mobile Salon</SectionTitle>
          <CommentText>Podane ceny są cenami brutto. Zawierają podatek VAT 8% lub 23%.</CommentText>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <TablePrices data={serviceList} />
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5 mb-5'>
        <SectionTitle>Co jeszcze mamy w ofercie?</SectionTitle>
        <div className='row d-flex justify-content-center'>
          <div className='col-8'>Bony podarunkowe, usługi dla firm</div>
        </div>
      </div>
    </>
  );
};

export default ServicesListPage;
