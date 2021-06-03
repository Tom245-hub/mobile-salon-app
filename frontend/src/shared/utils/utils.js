import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const showAvailableCities = (stylistList) => {
  let cities = [];
  stylistList.map(
    (stylist) =>
      !cities.includes(stylist.profileData.city) &&
      stylist.profileData.city &&
      cities.push(stylist.profileData.city)
  );
  return cities;
};

export const showAvailableServices = (data) => {
  let avilableServices = [];
  data.map((item) =>
    Object.keys(item.services).map(
      (service) => !avilableServices.includes(service) && avilableServices.push(service)
    )
  );
  return avilableServices;
};

export const showStars = (stars) => {
  switch (stars) {
    case 1:
      return <FontAwesomeIcon icon={faStar} />;
    case 2:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 3:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 4:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    default:
      return null;
  }
};
