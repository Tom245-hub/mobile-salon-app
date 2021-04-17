import React, { useState } from "react";

import SliderDefault from '../../../components/SliderDefault';
import Image from '../../../components/Image';
// import CityTeam from './CityTeam/CityTeam';


/* API - start */
const data = [
  [
    {
      title: 'Edyta',
      url: '/stylistki/warszawa/01-edyta',
      img: '/img/stylist/warszawa/01-edyta/01-edyta.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
    {
      title: 'Patrycja',
      url: '/stylistki/warszawa/02-patrycja',
      img: '/img/stylist/warszawa/02-patrycja/02-patrycja.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
    {
      title: 'Dagmara',
      url: '/stylistki/warszawa/06-dagmara',
      img: '/img/stylist/warszawa/06-dagmara/06-dagmara.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
    {
      title: 'Polina',
      url: '/stylistki/warszawa/07-polina',
      img: '/img/stylist/warszawa/07-polina/07-polina.jpg',
      position: [
        'wizażystka',
      ],
    },
    {
      title: 'Ola',
      url: '/stylistki/warszawa/08-ola',
      img: '/img/stylist/warszawa/08-ola/08-ola.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
    {
      title: 'Martyna',
      url: '/stylistki/warszawa/09-martyna',
      img: '/img/stylist/warszawa/09-martyna/09-martyna.jpg',
      position: [
        'wizażystka',
      ],
    },
  ],
  [
    {
      title: 'Ilona',
      url: '/stylistki/krakow/03-ilona',
      img: '/img/stylist/krakow/03-ilona/03-ilona.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
    {
      title: 'Małgorzata',
      url: '/stylistki/krakow/04-malgorzata',
      img: '/img/stylist/krakow/04-malgorzata/04-malgorzata.jpg',
      position: [
        'fryzjerka',
        'wizażystka',
      ],
    },
  ],
  [
    {
      title: 'Ola',
      url: '/stylistki/wroclaw/05-ola',
      img: '/img/stylist/05-ola/05-ola.jpeg',
      position: [
        'wizażystka',
      ],
    },
  ]
]
/* API - end */

const SectionTeam = () => {
  // let teamData = [1];

  // const [data, setData] = useState(teamData[1])


  

  return (
      <div className="container">
        <h2 className="text-center mb-5">Poznaj stylistki Mobile Salon</h2>

        <div className="row">

          <div className="col-5">
            <Image 
              img='/img/fryzjerki-slubne-mobile-salon.jpg'
              height='60%'
              alt='Mobile Salon'
            />
          </div>

          <div className="col-7 d-flex flex-column justify-content-between">

            <h6>Do zespołu Mobile Salon trafiają jedynie stylistki z doświadczeniem, pasją i kreatywnym podejściem do stylizacji. </h6>
            
            <div>
              <SliderDefault 
                slidesToShow={3}
                data={data}
                info={false}
              />
            </div>
            
            <div>
              {/* <a onClick={() => setData(teamData[1])}>WARSZAWA</a>
              <a onClick={() => setData(teamData[2])}>KRAKÓW</a>
              <a onClick={() => setData(teamData[3])}>WROCŁAW</a>
              <a onClick={() => setData(teamData[4])}>POZNAŃ</a>
              <a onClick={() => setData(teamData[5])}>GDAŃSK</a> */}
            </div>

          </div>
        </div>
        

      </div>
  );
}

export default SectionTeam;