import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../../../../../store/StoreProvider";
import Card from "../../../../components/Card";
import LinkList from "../../../../components/LinkList";
import ContainerSubmenu from "../../../../components/ContainerSubmenu";

const TopMenu = (props) => {
  const { categoryList, cityList } = useContext(StoreContext);

  return (
    <ul className='d-flex h-100'>
      <li className='d-flex align-items-center mx-2'>
        <NavLink to='/uslugi' onMouseEnter={() => props.handleMouseEnter(1)}>
          USŁUGI <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <ContainerSubmenu id={1} activeSubmenu={props.activeSubmenu} handleMouseLeave={props.handleMouseLeave}>
          <div className='col d-flex flex-row align-items-center'>
            <div className='d-flex flex-column'>
              <LinkList title='Usługi' links={categoryList} setActiveSubmenu={props.setActiveSubmenu} />
            </div>
          </div>

          {categoryList.map((item, index) => (
            <div key={index} className='col'>
              <Card img={item.img} url={item.url} title={item.title} text={item.text} bgColorHover={false} />
            </div>
          ))}
        </ContainerSubmenu>
      </li>

      <li className='d-flex align-items-center mx-2'>
        <NavLink to='/stylistki' onMouseEnter={() => props.handleMouseEnter(2)}>
          STYLISTKI <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <ContainerSubmenu id={2} activeSubmenu={props.activeSubmenu} handleMouseLeave={props.handleMouseLeave}>
          <div className='col d-flex flex-column'>
            <LinkList title='Miasta' links={cityList} />
          </div>
        </ContainerSubmenu>
      </li>

      <li className='d-flex align-items-center mx-2'>
        <NavLink to='#' onMouseEnter={() => props.handleMouseEnter(3)}>
          BLOG <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <ContainerSubmenu id={3} activeSubmenu={props.activeSubmenu} handleMouseLeave={props.handleMouseLeave}>
          <div className='col d-flex flex-column'>
            <LinkList title='Najnowsze artykuły' links={cityList} />
          </div>
        </ContainerSubmenu>
      </li>

      <li className='d-flex align-items-center mx-2'>
        <NavLink to='#'>KONTAKT</NavLink>
      </li>
    </ul>
  );
};

export default TopMenu;
