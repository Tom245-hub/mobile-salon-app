import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// import img1 from '../../images/stylist/8-aleksandra-warszawa/fryzura-do-pracy-warszawa-mokotow.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="item-icon">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="item-icon">
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    </div>
  );
};

const StylistScreen = () => {
  // const [stylist, setStylist] = useState([]);
  // const [portfolio, setPortfolio] = useState({});

  // const getFetch = () => {
  //     fetch('http://mobile-salon/controllers/StylistApiController', {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //     })
  //         .then(response => response.json())
  //         .then(response => {
  //             setStylist(response.stylists[0])
  //             setPortfolio(response.stylists[0].portfolio)
  //         });
  // }

  // useEffect(() => {
  //     getFetch();
  // }, []);

  // const settings = {
  //     nextArrow: <NextArrow />,
  //     prevArrow: <PrevArrow />
  // };

  // const [nav1, setNav1] = useState(null)
  // const [nav2, setNav2] = useState(null)

  // let slider1 = []
  // let slider2 = []

  // useEffect(() => {
  //     setNav1(slider1)
  //     setNav2(slider2)
  // }, [slider1, slider2])

  return (
    <div className="container-stylist-screen">
      Stylist Screen
      {console.log(Object.keys(portfolio).map((item) => item))}
      <div className="slider-main-images">
        <div className="container-slider-big">
          {/* <Slider {...settings}
                        asNavFor={nav2}
                        ref={slider => (slider1 = slider)}
                    >

                        {stylist && stylist.portfolio.map((item, index) =>
                            <div key={index}>


                                <div className="image-container">
                                    <div className="image-wrap">
                                        <div className="image">
                                            <img src={item} />

                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}



                    </Slider> */}
        </div>

        <div className="container-slider-small">
          {/* <Slider
                        asNavFor={nav1}
                        ref={slider => (slider2 = slider)}

                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        {stylist && stylist.portfolio.map((item, index) =>

                            <div className="image-container">
                                <div key={index} className="image-wrap">
                                    <div className="image">
                                        <img src={item} />
                                    </div>
                                </div>
                            </div>

                        )}
                    </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default StylistScreen;
