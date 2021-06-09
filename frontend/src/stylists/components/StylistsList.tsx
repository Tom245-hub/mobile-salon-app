import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Stylist } from "../../shared/models/stylistModel";
import { StyledContainer, StyledFilter } from "./StylistsList.css";

interface StylistListProps {
  stylistList: Stylist[];
}

const StylistList: React.FC<StylistListProps> = ({ stylistList }) => {
  if (stylistList.length === 0 || !stylistList) {
    return <h3>Nie znaleźliśmy stylistek</h3>;
  }

  return (
    <StyledContainer>
      <StyledFilter>
        <li>WARSZAWA</li>
        <li>KRAKÓW</li>
        <li>WROCŁAW</li>
        <li>POZNAŃ</li>
        <li>GDAŃSK</li>
      </StyledFilter>

      <StyledFilter>
        <li>fryzjerka</li>
        <li>wizażystka</li>
      </StyledFilter>

      {stylistList.map((stylist, index) => (
        <Card
          key={index}
          img={stylist.profileData.img}
          url={"stylistki/" + stylist._id}
          title={stylist.profileData.title}
          margin='0'
        />
      ))}
    </StyledContainer>
  );
};

export default StylistList;
