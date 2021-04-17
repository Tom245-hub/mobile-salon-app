import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';


const Link = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  transition: .2s ease-in-out;
  &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.warning};
  }
`

const CityBox = (props) => {

  return (
    <div className="d-flex align-items-center">

      <Link onClick={() => props.setActiveTopBar(true)}>
          <span className="mr-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
          {props.city ? props.city : 'Wybierz miasto'}
          {!props.activeTopBar && props.city ? ' (zmień)' : ''}
      </Link>

    </div>
  )
}

export default CityBox;