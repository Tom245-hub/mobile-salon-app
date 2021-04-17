import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { showAvailableCities, showAvailableServices } from '../../utils/utils';
import StylistBox from './StylistBox';



const StylistListScreen = () => {
    const [stylistList, setStylistList] = useState([]);

    let location = useLocation();
    console.log(location.search)

    const [city, setCity] = useState();
    console.log(city)

    const getFetch = () => {
        let url = 'http://localhost/mobile-salon-app/backend/constrollers/StylistApiController.php';
        if (city) {
            url += '?city=' + (city).toLowerCase();
        }
        if (location.search) {
            url += location.search;
        }
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                setStylistList(response.stylists)
            });
    }

    useEffect(() => {
        getFetch();
    }, [city]);




    return (
        <div className="container-fluid my-5 py-5 ">
            <div className="row">

                <div className="col-2">

                    <select onChange={(e) => setCity(e.target.value)}>
                        <option value="">Wszystkie miasta</option>
                        {stylistList && showAvailableCities(stylistList).map((item, index) => <option key={index} value={item} >{item}</option>)}
                    </select>

                    {stylistList && showAvailableServices(stylistList).map((item, index) => <label key={index}><input type="checkbox" value={item} />{item}</label>)}

                </div>
                
                <div className="col-10">
                    <div className="row">
                        {stylistList &&
                            stylistList.map((stylist, index) =>
                                <div className="col-2">
                                    <StylistBox
                                        key={index}
                                        stylist={stylist && stylist}
                                    />
                                </div>
                            )}
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default StylistListScreen;





