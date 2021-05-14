import React, { createContext, useEffect, useState } from "react";

import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistListTest, setStylistListTest] = useState([]);
  const [stylistList, setStylistList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [slideList, setSlideList] = useState([]);
  console.log(stylistListTest);

  const [user, setUser] = useState(null);

  // Testowanie
  // const [user, setUser] = useState({
  //   idUser: 1,
  //   accessLevel: 0,
  //   login: "e",
  //   password: "1",
  // });
  // Testowanie

  const [userLogged, setUserLogged] = useState([]);
  const [loginModal, setLoginModal] = useState(false);

  const fetchDataStylist = async () => {
    const { data } = await request.get("/stylists");
    setStylistList(data.stylists);
  };

  const fetchDataStylistTest = async () => {
    const { data } = await request.get("/stylistsTest");

    setStylistListTest(data);
  };

  const fetchDataCity = async () => {
    const { data } = await request.get("/cities");
    setCityList(data.cities);
  };

  const fetchDataService = async () => {
    const { data } = await request.get("/services");
    setServiceList(data.services);
  };

  const fetchDataCategory = async () => {
    const { data } = await request.get("/categories");
    setCategoryList(data.categories);
  };

  const fetchDataSlide = async () => {
    const { data } = await request.get("/sliderTest");
    setSlideList(data);
  };

  // const fetchDataOrder = async () => {
  //   const { data } = await request.get("/orders");
  //   setOrderList(data.orders);
  // };

  useEffect(() => {
    fetchDataStylistTest();
    fetchDataStylist();
    fetchDataCity();
    fetchDataCategory();
    fetchDataService();
    fetchDataSlide();
    // fetchDataOrder();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        stylistListTest,
        setStylistListTest,
        stylistList,
        setStylistList,
        serviceList,
        setServiceList,
        slideList,
        setSlideList,
        user,
        setUser,
        userLogged,
        setUserLogged,
        categoryList,
        setCategoryList,
        cityList,
        setCityList,
        loginModal,
        setLoginModal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
