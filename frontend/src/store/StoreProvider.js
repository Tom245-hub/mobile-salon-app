import React, { createContext, useEffect, useState } from "react";
import request from "../utils/request";
import { useHttpClient } from "../hooks/http-hook";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState(false);
  const [serviceList, setServiceList] = useState(false);
  const [categoryList, setCategoryList] = useState(false);
  const [cityList, setCityList] = useState(false);
  const [slideList, setSlideList] = useState(false);

  const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState([]);

  const fetchDataStylist = async () => {
    try {
      const { data } = await request.get("/stylists");
      setStylistList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataCity = async () => {
    try {
      const { data } = await request.get("/cities");
      setCityList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataService = async () => {
    try {
      const { data } = await request.get("/services");
      setServiceList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const { data } = await request.get("/categories");
      setCategoryList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataSlide = async () => {
    try {
      const { data } = await request.get("/slider");
      setSlideList(data);
    } catch (error) {
      console.log(error);
    }
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
      {cityList && stylistList && serviceList && categoryList && slideList && (
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
