import React, { createContext, useEffect, useState } from "react";

import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [slideList, setSlideList] = useState([]);

  const fetchDataStylist = async () => {
    const { data } = await request.get("/StylistApiController.php");
    setStylistList(data.stylistList);
  };

  const fetchDataService = async () => {
    const { data } = await request.get("/ServiceApiController.php");
    setServiceList(data.serviceList);
  };

  const fetchDataSlide = async () => {
    const { data } = await request.get("/SliderApiController.php");
    setSlideList(data.slideList);
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
