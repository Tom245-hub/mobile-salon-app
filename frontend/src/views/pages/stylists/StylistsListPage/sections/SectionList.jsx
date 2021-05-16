import React, { useContext } from "react";
import { StoreContext } from "../../../../../store/StoreProvider";
import Card from "../../../../components/Card";

const SectionList = () => {
  const { stylistList } = useContext(StoreContext);

  return (
    <>
      <div className='row'>
        {stylistList &&
          stylistList.map((stylist, index) => (
            <div key={index} className='col-6 col-md-3 mb-3'>
              {stylist.profileData.img && <Card img={stylist.profileData.img} url={"stylistki/" + stylist._id} title={stylist.profileData.title} bgColorHover={true} />}
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionList;
