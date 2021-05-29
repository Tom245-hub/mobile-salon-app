import React, { useEffect, useState } from "react";
import request from "../utils/request";

interface Stylist {
  _id: number;
  personalData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    birthYear: number;
    zipcode: string;
  };
  profileData: {
    title: string;
    url: string;
    img: string;
    text: string;
    position: {
      hairStylist: boolean;
      makeupStylist: boolean;
    };
    hairStylExp: number;
    makeupStylExp: number;
    city: string;
  };
}

interface Service {
  _id: number;
  title: string;
  url: string;
  img: string;
  text: string;
}

interface Category {
  _id: number;
  title: string;
  url: string;
  slug: string;
  img: string;
  text: string;
}

interface Slide {
  _id: number;
  title: string;
  url: string;
  img: string;
  text: string;
}

interface City {
  _id: number;
  title: string;
  titleMin: string;
  url: string;
}

export type StoreContext = {
  stylistList: Stylist[];
  serviceList: Service[];
  categoryList: Category[];
  slideList: Slide[];
  cityList: City[];
  isUserLogged: boolean;
  setIsUserLogged: Function;
};

export const StoreContext = React.createContext({} as StoreContext);

const StoreProvider: React.FC = ({ children }) => {
  const [stylistList, setStylistList] = useState<Stylist[]>([]);
  const [serviceList, setServiceList] = useState<Service[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [slideList, setSlideList] = useState<Slide[]>([]);
  const [cityList, setCityList] = useState<City[]>([]);

  const [isUserLogged, setIsUserLogged] = useState(false);

  const fetchDataStylist = async () => {
    try {
      const { data } = await request.get("/stylists");
      setStylistList(data);
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

  const fetchDataCity = async () => {
    try {
      const { data } = await request.get("/cities");
      setCityList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataStylist();
    fetchDataService();
    fetchDataCategory();
    fetchDataSlide();
    fetchDataCity();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        stylistList,
        serviceList,
        categoryList,
        slideList,
        isUserLogged,
        setIsUserLogged,
        cityList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
