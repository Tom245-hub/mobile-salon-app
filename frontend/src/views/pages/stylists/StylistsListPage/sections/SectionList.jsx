import React, { useContext } from "react";
import { StoreContext } from "../../../../../store/StoreProvider";
import Card from "../../../../components/Card";

const SectionList = () => {
  const { stylistList } = useContext(StoreContext);

  return (
    <>
      <div className='row'>
        {stylistList.map((item, index) => (
          <div key={index} className='col-6 col-md-3 mb-3'>
            {item.profileData.img && <Card img={item.profileData.img} url={item.profileData.url} title={item.profileData.title} bgColorHover={true} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionList;
