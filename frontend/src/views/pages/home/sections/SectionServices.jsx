import React, { useEffect, useState } from "react";
// import ServiceBox from './ServiceBox/ServiceBox';

import ZipCode from '../../../components/ZipCode';
import Card from '../../../components/Card';

import request from '../../../../utils/request';




/* API - start */
// const servicesData = [
//   {
//       title: 'Fryzury ślubne z dojazdem',
//       url: '/uslugi/fryzury-slubne',
//       img: '/img/fryzury-slubne-mobile-salon.jpg',
//   },
//   {
//       title: 'Makijaże ślubne z dojazdem',
//       url: '/uslugi/makijaze-slubne',
//       img: '/img/makijaze-slubne-mobile-salon.jpg',
//   },
//   {
//       title: 'Fryzury okazyjne z dojazdem',
//       url: '/uslugi/fryzury-okazyjne',
//       img: '/img/fryzjerki-slubne-mobile-salon.jpg',
//   },
//   {
//       title: 'Makijaże okazyjne z dojazdem',
//       url: '/uslugi/makijaze-okazyjne',
//       img: '/img/fryzjerki-slubne-mobile-salon.jpg',
//   },
// ]
/* API - end */

const SectionServices = () => {

  const [serviceList, setServiceList] = useState([]);

  const fetchData = async () => {
    const {data} = await request.get('/backend/constrollers/ServiceApiController.php');
    console.log(data.serviceList)
    setServiceList(data.serviceList);
  }

  useEffect(() => {
    fetchData();
  }, []);



  const services = serviceList.map((item, index) =>
      <div key={index} className="col-3">

          <Card
            img={item.img}
            url={item.url}
            title={item.title} 
            bgColorHover={true}
          />

      </div>
  )

  return (
    <div className="SectionServices">

      <ZipCode />

      <div className="row">
            {services}
      </div>
    </div>
  );
}

export default SectionServices;