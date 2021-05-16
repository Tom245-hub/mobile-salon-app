import React from "react";
import styled from "styled-components";

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
