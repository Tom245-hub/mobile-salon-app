import { Stylist } from "../../shared/models/stylistModel";

import Image from "../../shared/components/UIElements/Image";

import {
  StyledContainer,
  StyledBox,
  StyledTitle,
  StyledSubtitle,
  StyledText,
} from "./IntroProfile.css";

interface IntroProfileProps {
  stylist: Stylist;
}

const IntroProfile: React.FC<IntroProfileProps> = ({ stylist: { profileData } }) => {
  console.log(profileData.position);
  const hairStylist = profileData.position.hairStylist && "stylistka fryzur";
  const makupStylist = profileData.position.makeupStylist && "wizażystka";

  return (
    <StyledContainer>
      <Image paddingTop='80%' img={profileData.img} alt={profileData.title} margin='0' />
      <StyledBox>
        <StyledTitle>{profileData.title}</StyledTitle>
        <StyledSubtitle>
          {hairStylist} / {makupStylist}
        </StyledSubtitle>
        <StyledText>{profileData.text}</StyledText>
      </StyledBox>
    </StyledContainer>
  );
};

export default IntroProfile;
