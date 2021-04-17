import React, {useEffect, useState} from "react";

import SliderDefault from '../../../components/SliderDefault';

import request from '../../../../utils/request';

/* API - start */
// const data = [
//     {
//         title: 'Trendy fryzur ślubnych 2021',
//         url: '/uslugi/fryzury-slubne',
//         img: '/img/fryzury-slubne-mobile-salon.jpg',
//     },
//     {
//         title: 'Sprawdź swoją stylistkę i zamów spotkanie próbne',
//         url: '/uslugi/makijaze-slubne',
//         img: '/img/makijaze-slubne-mobile-salon.jpg',
//     },
//     {
//         title: 'Standardy naszych usług',
//         url: '/uslugi/fryzury-okazyjne',
//         img: '/img/fryzjerki-slubne-mobile-salon.jpg',
//     },
// ]
/* API - end */


const SectionSlider = () => {

    const [slideList, setSlideList] = useState([]);

    const fetchData = async () => {
      const { data } = await request.get('/backend/constrollers/SliderApiController.php');
      setSlideList(data.slideList);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <SliderDefault
        slidesToShow={1}
        data={slideList}
        info={true}
      />
    );
}

export default SectionSlider;