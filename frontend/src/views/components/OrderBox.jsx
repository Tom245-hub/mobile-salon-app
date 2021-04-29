import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ordersData } from "../../../../backend/controllers/orders";

import Image from "./Image";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 3px;
`;

const Row = styled.div`
  display: flex;
`;

const ColStatus = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.colors.graySuperLight};
  padding: ${(props) => props.theme.gaps.m};
`;

const ColServices = styled.div`
  width: 60%;
  background-color: #fff;
  padding: ${(props) => props.theme.gaps.m};
`;

const ColAdress = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.colors.graySuperLight};
  padding: ${(props) => props.theme.gaps.m};
`;

const ColAccept = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.success};
  padding: ${(props) => props.theme.gaps.m};
`;

const ColCancel = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.warning};
  padding: ${(props) => props.theme.gaps.m};
`;

const OrderBox = (props) => {
  //   console.log(props.services);
  return (
    <Container>
      <Row>
        <ColStatus>
          <ul>
            <li>Status: {props.status}</li>
            <li>Data: {props.date}</li>
            <li>Godz: {props.time}</li>
          </ul>
        </ColStatus>
        <ColServices>
          Okazja zamówienia: Dzień Ślubu
          <ul>
            {props.services.map((person, index) => (
              <li key={index}>
                Włosy: {person.hair.hair} Cena: {person.hair.price} zł / Makijaż: {person.makeup.makeup} Cena: {person.makeup.price} zł
              </li>
            ))}
          </ul>
        </ColServices>
        <ColAdress>
          Adres:
          <ul>
            <li>Miasto: {props.adress.city}</li>
            <li>Kod pocztowy: {props.adress.zipcode}</li>
            <li>Ulica: {props.adress.street}</li>
            <li>Numer domu: {props.adress.buildNumber}</li>
            <li>Numer lokalu: {props.adress.localNumber}</li>
            <li>Piętro: {props.adress.floor}</li>
          </ul>
        </ColAdress>
      </Row>
      <Row>
        <ColAccept>Akceptuj</ColAccept>
        <ColCancel>Odrzuć</ColCancel>
      </Row>
    </Container>
  );
};

export default OrderBox;
