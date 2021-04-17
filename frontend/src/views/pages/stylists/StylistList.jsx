import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Card from '../../components/Card';

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

const Intro = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: ${props => props.theme.colors.grayDark};
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.theme.colors.gray};
  }

  h4 {
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.theme.colors.grayDark};
  }
`;

const FilterCity = styled.div`
  li {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
  }
`;

const FilterPosition = styled.div`
  li {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.gray};
  }
`;


const StylistList = () => {


    return (
        <div className="container my-5">

            <Intro className="row d-flex justify-content-center mb-5">
                <div className="col-8">
                    <h2 class="text-center mb-3">Jesteśmy zespołem stylistów chcących tworzyć nowy standard usługi dla Waszej wygody.</h2>
                    <h3 class="text-center mb-3">Dzięki Wam możemy mieć pracę, którą kochamy.</h3>
                    <h4 class="text-center mb-3">Do naszego zespołu trafiają wyłącznie styliści z doświadczeniem,<br />
                    zamiłowaniem i kreatywnym spojrzeniem na stylizację wizerunku.<br />
                    Zapraszamy do galerii naszych prac.</h4>
                </div>
            </Intro>

            <FilterCity className="row d-flex justify-content-center mb-3">
                <div className="col-8">
                    <ul className="d-flex justify-content-between">
                        <li>WARSZAWA</li>
                        <li>KRAKÓW</li>
                        <li>WROCŁAW</li>
                        <li>POZNAŃ</li>
                        <li>GDAŃSK</li>
                    </ul>
                </div>
            </FilterCity>

            <FilterPosition className="row d-flex justify-content-center mb-3">
                <div className="col-8">
                    <ul className="d-flex justify-content-center">
                        <li className="mx-2">fryzjerka</li>
                        <li className="mx-2">wizażystka</li>
                    </ul>
                </div>
            </FilterPosition>

            <div className="row">

                {data[0].map((item, index) =>
                
                    <div key={index} className="col-3 mb-3">
                        <Card
                            img={item.img}
                            url={item.url}
                            title={item.title} 
                            bgColorHover={true}
                        />
                    </div>

                )}
                    
            </div>



        </div>
    );
}

export default StylistList;





