import React, { createContext, useEffect, useState } from "react";

import request from "../utils/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [stylistList, setStylistList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [slideList, setSlideList] = useState([]);
  const [user, setUser] = useState(null);

  const [loginModal, setLoginModal] = useState(false);

  // console.log(categoryList);

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  if (user) {
    console.log("zalogowany");
  } else if (!user) {
    console.log("niezalogowany");
  }

  // const [loggedUser, setLoggedUser] = useState();

  // useEffect(() => {
  //   if (user && user.accessLevel === 0) {
  //     const stylist = stylistList.filter((stylist) => stylist.idStylist === user.idUser)[0];
  //     const orders = orderList.filter((order) => order.idStylist === stylist.idStylist);
  //     setLoggedUser({ user, stylist, orders });
  //   }
  // }, [user, stylistList, orderList]);

  // Testowanie
  // const [loggedUser, setLoggedUser] = useState({
  //   user: {
  //     idUser: 1,
  //     accessLevel: 0,
  //     login: "e",
  //     password: "1",
  //   },
  //   stylist: {
  //     idStylist: 1,
  //     title: "Edyta",
  //     url: "/stylistki/1",
  //     img: "/img/stylist/warszawa/01-edyta/01-edyta.jpg",
  //     text:
  //       "Historie z makijażem zaczęła w 2009 roku, gdy po architekturze krajobrazu postanowiła rozwijać się artystycznie stawiając na szkołę wizażu. Szkoła “Atlook” rozkochała Edytę w makijażu, co skłoniło ją do dalszego rozwoju w kierunku charakteryzacji w “Studio Sztuki” – uzyskała tam tytuł technik plastyk. Charakteryzacja to coś co łączy jej dwie pasje – ludzi oraz makijaż/stylizację. Sprawia jej to ogromną przyjemność. Prywatnie również maluje oraz zajmuje się rysunkiem.",
  //     position: {
  //       hairStylist: true,
  //       makeupStylist: true,
  //     },
  //     experience: 10,
  //     city: "Warszawa",
  //   },
  //   orders: [
  //     {
  //       status: "nowe",
  //       idOrder: 1,
  //       idStylist: 1,
  //       idClient: 56,
  //       date: "12 październik 2021",
  //       time: "9:00",
  //       adress: {
  //         street: "Marszłkowska",
  //         buildNumber: "5a",
  //         localNumber: "77",
  //         floor: "4",
  //         zipcode: "01-300",
  //         city: "Warszawa",
  //       },
  //       services: [
  //         {
  //           hair: {
  //             idService: 1,
  //             hair: "Ślubne upięcie włosów",
  //             price: 239,
  //           },
  //           makeup: {
  //             idService: 2,
  //             makeup: "Makijaż ślubny",
  //             price: 199,
  //           },
  //         },
  //         {
  //           hair: {
  //             idService: 5,
  //             hair: "Wieczorowe upięcie włosów",
  //             price: 199,
  //           },
  //           makeup: {
  //             idService: 8,
  //             makeup: "Makijaż wieczorowy",
  //             price: 199,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // });
  // Testowanie

  const fetchDataStylist = async () => {
    const { data } = await request.get("/stylists");
    setStylistList(data.stylists);
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
    const { data } = await request.get("/slider");
    setSlideList(data.slider);
  };

  // const fetchDataOrder = async () => {
  //   const { data } = await request.get("/orders");
  //   setOrderList(data.orders);
  // };

  useEffect(() => {
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
        stylistList,
        setStylistList,
        serviceList,
        setServiceList,
        slideList,
        setSlideList,
        // orderList,
        // setOrderList,
        user,
        setUser,
        // loggedUser,
        // setLoggedUser,
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
