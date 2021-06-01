import React from "react";
import SliderHero from "../components/SliderHero";
import CategoryList from "../components/CategoryList";
import SliderTeam from "../components/SliderTeam";

const HomePage: React.FC = () => {
  return (
    <>
      <SliderHero />

      <CategoryList />

      <SliderTeam />
    </>
  );
};

export default HomePage;
