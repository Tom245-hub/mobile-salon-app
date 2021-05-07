import React from "react";
import styled from "styled-components";

const FilterLink = styled.a`
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
`;

const FilterCity = (props) => {
  return (
    <>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          <FilterLink onClick={() => props.setFilterCity("Warszawa")}>WARSZAWA</FilterLink>
          <FilterLink onClick={() => props.setFilterCity("Kraków")}>KRAKÓW</FilterLink>
          <FilterLink onClick={() => props.setFilterCity("Wrocław")}>WROCŁAW</FilterLink>
          <FilterLink onClick={() => props.setFilterCity("Poznań")}>POZNAŃ</FilterLink>
          <FilterLink onClick={() => props.setFilterCity("Gdańsk")}>GDAŃSK</FilterLink>
        </div>
      </div>
    </>
  );
};

export default FilterCity;
