import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { getCategoryList } from "../../data/actions/categoryActions";
import { RootState } from "../../data/reducers/rootReducers";
import { Category } from "../../models/categoryModel";

import LoadingSpinner from "../../components/UIElements/LoadingSpinner";

import Submenu from "./Submenu";
import Card from "../UIElements/Card";
import { StyledMenu } from "./TopMenu.css";

interface TopMenuProps {
  activeSubmenu: number;
  setActiveSubmenu: Function;
  handleMouseEnter: Function;
  handleMouseLeave: Function;
}

const TopMenu: React.FC<TopMenuProps> = ({
  activeSubmenu,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const dispatch = useDispatch();
  const categoryList: Category[] = useSelector(
    (state: RootState) => state.category.categoryList
  );

  const isLoading = categoryList.length === 0;

  useEffect(() => {
    dispatch(getCategoryList());
  }, [getCategoryList]);
  return (
    <StyledMenu>
      <li>
        <NavLink to='/uslugi' onMouseEnter={() => handleMouseEnter(1)}>
          USŁUGI <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <Submenu id={1} activeSubmenu={activeSubmenu} handleMouseLeave={handleMouseLeave}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div>
                <h4>Tytuł</h4>
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
              </div>
              {categoryList.map((category) => (
                <Card
                  key={category._id}
                  img={category.img}
                  url={category.url}
                  title={category.title}
                  text={category.text}
                  margin='0'
                />
              ))}
            </>
          )}
        </Submenu>
      </li>

      <li>
        <NavLink to='/stylistki' onMouseEnter={() => handleMouseEnter(2)}>
          STYLISTKI <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <Submenu id={2} activeSubmenu={activeSubmenu} handleMouseLeave={handleMouseLeave}>
          <div className='col d-flex flex-column'>
            <h4 className='mb-3'>Tytuł</h4>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </Submenu>
      </li>

      <li>
        <NavLink to='#' onMouseEnter={() => handleMouseEnter(3)}>
          BLOG <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>

        <Submenu id={3} activeSubmenu={activeSubmenu} handleMouseLeave={handleMouseLeave}>
          <div className='col d-flex flex-column'>
            <h4 className='mb-3'>Tytuł</h4>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </Submenu>
      </li>

      <li>
        <NavLink to='#'>KONTAKT</NavLink>
      </li>
    </StyledMenu>
  );
};

export default TopMenu;
