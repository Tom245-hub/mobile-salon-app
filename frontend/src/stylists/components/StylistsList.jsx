import React from "react";
import Card from "../../shared/components/UIElements/Card";
import ErrorText from "../../shared/components/UIElements/ErrorText";

const StylistList = ({ stylistList }) => {
  if (stylistList.length === 0 || !stylistList) {
    return (
      <div className='row d-flex justify-content-center py-5 my-5'>
        <ErrorText>Nie znaleźliśmy stylistek</ErrorText>
      </div>
    );
  }

  return (
    <div className='row'>
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-12 col-md-8'>
          <ul className='d-flex justify-content-between'>
            <li>WARSZAWA</li>
            <li>KRAKÓW</li>
            <li>WROCŁAW</li>
            <li>POZNAŃ</li>
            <li>GDAŃSK</li>
          </ul>
        </div>
      </div>
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-12 col-md-8'>
          <ul className='d-flex justify-content-center'>
            <li className='mx-2'>fryzjerka</li>
            <li className='mx-2'>wizażystka</li>
          </ul>
        </div>
      </div>
      {stylistList.map((stylist, index) => (
        <div key={index} className='col-6 col-md-3 mb-3'>
          <Card img={stylist.profileData.img} url={"stylistki/" + stylist._id} title={stylist.profileData.title} bgColorHover={true} />
        </div>
      ))}
    </div>
  );
};

export default StylistList;
