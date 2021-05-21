import React, { useContext } from "react";

import { StoreContext } from "../../../../../store/StoreProvider";

const TopMenuMobile = ({}) => {
  const { categoryList, cityList } = useContext(StoreContext);

  return <ul className='d-flex h-100'>mobile menu</ul>;
};

export default TopMenuMobile;
