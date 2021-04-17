import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Card from '../../../components/Card';

import request from '../../../../utils/request';


const ContainerSubmenu = styled.div`
    border-top: 1px solid rgba(#111, 0.2);
    border-bottom: 1px solid rgba(#111, 0.2);
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    overflow: hidden;
    display: none;
`


/* API - start */
// const servicesData = [
//     {
//         title: 'Fryzury ślubne z dojazdem',
//         url: '/uslugi/fryzury-slubne',
//         img: '/img/fryzury-slubne-mobile-salon.jpg',
//         text: 'Upięcia, koki z welonem, warkocze, ozdoby.',
//     },
//     {
//         title: 'Makijaże ślubne z dojazdem',
//         url: '/uslugi/makijaze-slubne',
//         img: '/img/makijaze-slubne-mobile-salon.jpg',
//         text: 'Trwałe i piękne, delikatne lub wyraźne.',
//     },
//     {
//         title: 'Fryzury okazyjne z dojazdem',
//         url: '/uslugi/fryzury-okazyjne',
//         img: '/img/fryzjerki-slubne-mobile-salon.jpg',
//         text: 'Trwałe i piękne, delikatne lub wyraźne.',
//     },
//     {
//         title: 'Makijaże okazyjne z dojazdem',
//         url: '/uslugi/makijaze-okazyjne',
//         img: '/img/fryzjerki-slubne-mobile-salon.jpg',
//         text: 'Trwałe i piękne, delikatne lub wyraźne.',
//     },
//   ]
  /* API - end */


const TopMenu = (props) => {

    const [serviceList, setServiceList] = useState([]);

    const fetchData = async () => {
        const {data} = await request.get('/backend/constrollers/ServiceApiController.php');
        setServiceList(data.serviceList);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <ul className="TopMenu menu-top d-flex h-100">
             
        <li className="menu-item d-flex align-items-center mx-2">
            <Link to="#" className="item-link" onMouseEnter={() => props.handleMouseEnter(1)}>USŁUGI <FontAwesomeIcon icon={faChevronDown} /></Link>
            
            <ContainerSubmenu className={"container-fluid bg-white py-5" + (props.activeSubmenu === 1 ? " d-block" : "")} onMouseLeave={props.handleMouseLeave}>

                <div className="row w-100 d-flex justify-content-around px-5">

                    <div className="col d-flex flex-row align-items-center">
                        <div className="d-flex flex-column">
                            <h4 className="mb-3">Usługi</h4>
                            <Link className="mb-2" to="/uslugi/fryzury-slubne" onClick={() => props.setActiveSubmenu(0)} className="submenu-link">Fryzury ślubne</Link>
                            <Link className="mb-2" to="/uslugi/makijaze-slubne" onClick={() => props.setActiveSubmenu(0)} className="submenu-link">Makijaże ślubne</Link>
                            <Link className="mb-2" to="/uslugi/fryzury-okazyjne" onClick={() => props.setActiveSubmenu(0)} className="submenu-link">Fryzury okazyjne</Link>
                            <Link className="mb-2" to="/uslugi/makijaze-okazyjne" onClick={() => props.setActiveSubmenu(0)} className="submenu-link">Makijaże okazyjne</Link>
                        </div>
                    </div>
                    

                    {serviceList && serviceList.map((item, index) =>
                        <div key={index} className="col">
                            <Card
                                img={item.img}
                                url={item.url}
                                title={item.title} 
                                text={item.text} 
                                bgColorHover={false}
                            />
                        </div>
                    )}

                </div>

            </ContainerSubmenu>

        </li>

        <li className="menu-item d-flex align-items-center mx-2">
            <Link to="/stylistki" className="item-link" onMouseEnter={() => props.handleMouseEnter(2)}>STYLISTKI <FontAwesomeIcon icon={faChevronDown} /></Link>

            <ContainerSubmenu className={"container-fluid bg-white py-5" + (props.activeSubmenu === 2 ? " d-block" : "")} onMouseLeave={props.handleMouseLeave}>
                <div className="row px-5">
                    <div className="col d-flex flex-column">

                        <h4 className="mb-3">Miasta</h4>
                        <Link to="/stylistki?city=warszawa">Warszawa</Link>
                        <Link to="#">Kraków</Link>
                        <Link to="#">Wrocław</Link>
                        <Link to="#">Poznań</Link>
                        <Link to="#">Gdańsk</Link>
                    </div>
                </div>
                    

            </ContainerSubmenu>
        </li>


        <li className="menu-item d-flex align-items-center mx-2">
            <Link to="#" className="item-link" onMouseEnter={() => props.handleMouseEnter(3)}>BLOG <FontAwesomeIcon icon={faChevronDown} /></Link>

            <ContainerSubmenu className={"container-fluid bg-white py-5" + (props.activeSubmenu === 3 ? " d-block" : "")} onMouseLeave={props.handleMouseLeave}>

                <div className="row px-5">
                    <div className="col d-flex flex-column">
                        <h4 className="mb-3">Najnowsze artykuły</h4>                    
                        <Link className="mb-2" to="#">Trendy fryzur ślubnych 2021</Link>
                        <Link className="mb-2" to="#">Jak przygotować się do wizyty makijażystki?</Link>
                    </div>

                </div>
                    
            </ContainerSubmenu>
        </li>


        <li className="menu-item d-flex align-items-center mx-2">
            <Link to="#" className="item-link">KONTAKT</Link>
        </li>
    </ul>
  )
}

export default TopMenu;