import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Container = styled.div``;

const LinkList = (props) => {
  return (
    <>
      <h4 className='mb-3'>{props.title}</h4>
      <ul>
        {props.links.map((item, index) => (
          <li key={index}>
            {props.setActiveSubmenu ? (
              <Link to={item.url} onClick={() => props.setActiveSubmenu(0)}>
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

export default LinkList;
