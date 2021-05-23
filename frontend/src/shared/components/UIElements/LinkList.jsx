import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkList = ({ title, links, setActiveSubmenu }) => {
  return (
    <>
      <h4 className='mb-3'>{title}</h4>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {setActiveSubmenu ? (
              <Link to={item.url} onClick={() => setActiveSubmenu(0)}>
                {item.title}
              </Link>
            ) : (
              <Link to={item.url}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  setActiveSubmenu: PropTypes.func,
};

export default LinkList;
