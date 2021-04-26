import React, { createContext, useEffect, useState } from "react";

import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [slideList, setSlideList] = useState([]);
  const [user, setUser] = useState(null);

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

  const fetchDataOrder = async () => {
    const { data } = await request.get("/orders");
    setOrderList(data.orders);
  };

  useEffect(() => {
    fetchDataStylist();
    fetchDataService();
    fetchDataSlide();
    fetchDataOrder();
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
        orderList,
        setOrderList,
        user,
        setUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
