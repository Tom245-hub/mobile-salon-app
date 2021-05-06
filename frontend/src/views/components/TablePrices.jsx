import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
  height: 100%;
  transition: 0.5s ease-in-out;
  margin: ${(props) => props.margin};

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => props.bgColorHover && props.theme.colors.primary};
    h2 {
      color: ${(props) => props.bgColorHover && props.theme.colors.graySuperLight};
    }
  }
`;

const TablePrices = (props) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>Usługa</th>
            <th scope='col'>Cena</th>
            <th scope='col'>Czas</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.idService}>
              <td>{item.title}</td>
              <td>{item.price} zł</td>
              <td>{item.time} h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePrices;
