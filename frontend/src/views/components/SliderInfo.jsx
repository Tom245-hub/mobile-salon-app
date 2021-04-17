import React from 'react';
import { Link } from 'react-router-dom';


import styled from 'styled-components';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: 3px;
`;



const SliderInfo = (props) => {


  return (
    <Container>
      <div className="py-3 pl-3 pr-5">
        <h2 className="mb-2">{props.title}</h2>
        <Link to={props.url}>
          <button className="btn btn-secondary">Zobacz więcej</button>
        </Link>
      </div> 
    </Container>
  )
}

export default SliderInfo;