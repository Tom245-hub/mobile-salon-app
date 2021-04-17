import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const UserLogin = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  transition: .2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.secondary};
}
`

const UserReservation = styled.div`
  transition: .2s ease-in-out;
  background-color: ${props => props.theme.colors.primary};
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.light};
    &:hover {
        color: ${props => props.theme.colors.white};
    }
  }
  
`




const UserBox = (props) => {

  return (
      <div className="d-flex h-100">

        <UserLogin className="d-flex justify-content-center align-items-center px-3">
          <a>ZALOGUJ</a>
        </UserLogin>
        
        <UserReservation className="d-flex justify-content-center align-items-center px-3">
          <Link to="/strefa-klientki/zamowienie">ZAREZERWUJ</Link>
        </UserReservation>
          
      </div>
  )
}

export default UserBox;