import React, { createContext, useEffect, useState } from "react";
import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [cityList, setCityList] = useState(false);
  const [slideList, setSlideList] = useState([]);

  const [user, setUser] = useState(null);
  const [userLogged, setUserLogged] = useState([]);

  const fetchDataStylist = async () => {
    const { data } = await request.get("/stylistsTest");
    setStylistList(data);
  };

  const fetchDataCity = async () => {
    const { data } = await request.get("/citiesTest");
    setCityList(data);
  };

  const fetchDataService = async () => {
    const { data } = await request.get("/servicesTest");
    setServiceList(data);
  };

  const fetchDataCategory = async () => {
    const { data } = await request.get("/categoriesTest");
    setCategoryList(data);
  };

  const fetchDataSlide = async () => {
    const { data } = await request.get("/sliderTest");
    setSlideList(data);
  };

  useEffect(() => {
    fetchDataStylist();
    fetchDataCity();
    fetchDataCategory();
    fetchDataService();
    fetchDataSlide();
  }, []);

  return (
    <>
      {cityList && stylistList && (
        <StoreContext.Provider
          value={{
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
          }}
        >
          {children}
        </StoreContext.Provider>
      )}
    </>
  );
};

export default StoreProvider;
