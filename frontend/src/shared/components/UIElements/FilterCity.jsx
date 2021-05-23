import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FilterLink = styled.a`
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
`;

const FilterCity = ({ cityList, setFilterCity }) => {
  return (
    <>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          {cityList.map((city, index) => (
            <FilterLink key={index} onClick={() => setFilterCity(city.title)}>
              {city.title}
            </FilterLink>
          ))}
        </div>
      </div>
    </>
  );
};

FilterCity.propTypes = {
  setFilterCity: PropTypes.func,
  cityList: PropTypes.array,
};

export default FilterCity;
