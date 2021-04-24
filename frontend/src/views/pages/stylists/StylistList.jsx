import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../store/StoreProvider";

import Card from "../../components/Card";

const Intro = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.grayDark};
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
  }

  h4 {
    font-size: 22px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grayDark};
  }
`;

const FilterCity = styled.div`
  li {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
  }
`;

const FilterPosition = styled.div`
  li {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const StylistList = () => {
  const { stylistList } = useContext(StoreContext);

  return (
    <div className="container my-5">
      <Intro className="row d-flex justify-content-center mb-5">
        <div className="col-8">
          <h2 className="text-center mb-3">
            Jesteśmy zespołem stylistów chcących tworzyć nowy standard usługi
            dla Waszej wygody.
          </h2>
          <h3 className="text-center mb-3">
            Dzięki Wam możemy mieć pracę, którą kochamy.
          </h3>
          <h4 className="text-center mb-3">
            Do naszego zespołu trafiają wyłącznie styliści z doświadczeniem,
            <br />
            zamiłowaniem i kreatywnym spojrzeniem na stylizację wizerunku.
            <br />
            Zapraszamy do galerii naszych prac.
          </h4>
        </div>
      </Intro>

      <FilterCity className="row d-flex justify-content-center mb-3">
        <div className="col-8">
          <ul className="d-flex justify-content-between">
            <li>WARSZAWA</li>
            <li>KRAKÓW</li>
            <li>WROCŁAW</li>
            <li>POZNAŃ</li>
            <li>GDAŃSK</li>
          </ul>
        </div>
      </FilterCity>

      <FilterPosition className="row d-flex justify-content-center mb-3">
        <div className="col-8">
          <ul className="d-flex justify-content-center">
            <li className="mx-2">fryzjerka</li>
            <li className="mx-2">wizażystka</li>
          </ul>
        </div>
      </FilterPosition>

      <div className="row">
        {stylistList.map((item, index) => (
          <div key={index} className="col-3 mb-3">
            <Card
              img={item.img}
              url={item.url}
              title={item.title}
              bgColorHover={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylistList;
