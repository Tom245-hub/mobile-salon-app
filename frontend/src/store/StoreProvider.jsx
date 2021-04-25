import React, { createContext, useEffect, useState } from "react";

import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [slideList, setSlideList] = useState([]);

  const fetchDataStylist = async () => {
    const { data } = await request.get("/stylists");
    setStylistList(data.stylists);
  };

  const fetchDataService = async () => {
    const { data } = await request.get("/services");
    setServiceList(data.services);
  };

  const fetchDataSlide = async () => {
    const { data } = await request.get("/slider");
    setSlideList(data.slider);
  };

  useEffect(() => {
    fetchDataStylist();
    fetchDataService();
    fetchDataSlide();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        stylistList,
        setStylistList,
        serviceList,
        setServiceList,
        slideList,
        setSlideList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
