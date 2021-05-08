import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
`;

const ColStatus = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.graySuperLight};
  padding: ${(props) => props.theme.gaps.m};
`;

const ColServices = styled.div`
  width: 50%;
  background-color: #fff;
  padding: ${(props) => props.theme.gaps.m};
`;

const ColAdress = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.graySuperLight};
  padding: ${(props) => props.theme.gaps.m};
`;

const OrderBox = (props) => {
  // console.log(props.services);
  return (
    <Container>
      <Row>
        <ColStatus>
          <table className='w-100'>
            <tbody>
              <tr>
                <td className='pr-2'>ID zamówienia: </td>
                <td>{props.idOrder}</td>
              </tr>
              <tr>
                <td className='pr-2'>Status: </td>
                <td>{props.statusOrder}</td>
              </tr>
              <tr>
                <td>Data: </td>
                <td>{props.date}</td>
              </tr>
              <tr>
                <td>Godz: </td>
                <td>{props.time}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={props.handleAccept} className='btn btn-primary my-3 mr-2'>
            Akceptuj
          </button>
          <button className='btn btn-warning my-3 mr-2'>Odrzuć</button>
        </ColStatus>
        <ColServices>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Usługa</th>
                <th scope='col'>Cena</th>
                <th scope='col'>Czas</th>
              </tr>
            </thead>
            <tbody>
              {props.services.length > 0 &&
                props.services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.title}</td>
                    <td>{service.price} zł</td>
                    <td>{service.time} h</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ColServices>
        <ColAdress>
          <table className='w-100'>
            <tbody>
              <tr>
                <td>Miasto: </td>
                <td>{props.adressDelivery.city}</td>
              </tr>
              <tr>
                <td>Kod pocztowy: </td>
                <td>{props.adressDelivery.zipcode}</td>
              </tr>
              <tr>
                <td>Ulica: </td>
                <td>{props.adressDelivery.street}</td>
              </tr>
              <tr>
                <td>Numer domu: </td>
                <td>{props.adressDelivery.buildNumber}</td>
              </tr>
              <tr>
                <td>Numer lokalu: </td>
                <td>{props.adressDelivery.localNumber}</td>
              </tr>
              <tr>
                <td>Piętro: </td>
                <td>{props.adressDelivery.floor}</td>
              </tr>
            </tbody>
          </table>
        </ColAdress>
      </Row>
    </Container>
  );
};

export default OrderBox;
