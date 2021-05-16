import React from "react";
import SectionIntro from "./sections/SectionIntro";
import SectionFilters from "./sections/SectionFilters";
import SectionList from "./sections/SectionList";
import SectionConsult from "./sections/SectionConsult";

const StylistsListPage = () => {
  return (
    <>
      <div className='container py-5'>
        <SectionIntro />
      </div>
      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <SectionFilters />
          <SectionList />
        </div>
      </div>
      <div className='container py-5'>
        <SectionConsult />
      </div>
    </>
  );
};

export default StylistsListPage;
