import React from "react";
import Card from "../../shared/components/UIElements/Card";

const ServicesList = ({ categoryList }) => {
  return (
    <div className='row'>
      {categoryList.map((category) => (
        <div key={category._id} className='col-3'>
          <Card
            img={category.img}
            url={category.url}
            title={category.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
