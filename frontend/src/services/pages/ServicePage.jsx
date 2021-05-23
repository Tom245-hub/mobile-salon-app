import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "../../shared/store/StoreProvider";
import ImageHero from "../../shared/components/UIElements/ImageHero";

const ServicePage = () => {
  const { categoryList, serviceList } = useContext(StoreContext);
  let { slug } = useParams();
  const category = categoryList.filter((category) => category.slug == slug)[0];
  const filterdServices = serviceList.filter((service) => service.category._id == category._id);

  return (
    <>
      <div className='container-fluid'>
        <ImageHero height='20%' img={category.img} title='Zarezerwuj usługe z dojazdem do domu lub hotelu' />
      </div>
      <div className='container py-5'>
        <SectionTitle>{category.title}</SectionTitle>
        <CommentText>{category.text}</CommentText>
      </div>
      <div className='container-fluid bg-light py-5'>
        <div className='container'>REALIZACJE</div>
      </div>
      <div className='container py-5'>
        <TablePrices data={filterdServices} />
      </div>
    </>
  );
};

export default ServicePage;
