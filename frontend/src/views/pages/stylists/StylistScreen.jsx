import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import request from '../../../utils/request';


const StylistScreen = () => {

    let { id, city } = useParams();


    const [stylist, setStylist] = useState({});

    const fetchData = async (id) => {
        const {data} = await request.get('/backend/constrollers/StylistApiController.php');
        let stylist = data.stylistList.filter(item => item.id_stylist == id);
        setStylist(stylist[0]);
    }

    useEffect(() => {
        fetchData(id);
    }, []);



    return (
        <div className="container my-5">

            <h3>stylistka ID: {id}</h3><br />
            <h3>stylistka city: {city}</h3><br />
            <h3>stylistka title: {stylist.title}</h3><br />
            <h3>stylistka img profile: {stylist.img}</h3><br />
            <h3>stylistka text: {stylist.text}</h3><br />
            {console.log(stylist)}
  
        </div>
    );
}

export default StylistScreen;





