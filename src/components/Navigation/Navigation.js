import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const list = [
  { name: "O nas", path: "/", exact: true },
  { name: "Dawniej i dziś", path: "/beforeafter" },
  { name: "Mapa obiektów nieistniejących", path: "/zniszczenia" },
  { name: "Galeria", path: "/pozostale" },
  { name: "Przydatne Linki", path: "/linki" },
  { name: "Kontakt", path: "/kontakt" }
];

const Menu = styled.div`
  display: flex;
  flex-direction: row;

  nav {
    display: flex;
  }
  li {
    display: flex;
    flex-direction: row;
  }
  li a {
    padding-top: 20px;
    padding-left: 5px;
  }
`;

const StyledLi = styled.li`
  li {
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = () => {
  const menu = list.map(item => (
    <StyledLi className="li" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#ffff8d",
          borderBottom: "1px solid #ffff8d"
        }}
      >
        {item.name}
      </NavLink>
    </StyledLi>
  ));
  return (
    <>
      <Menu>
        {" "}
        <nav>{menu}</nav>
      </Menu>
    </>
  );
};

export default withRouter(Navigation);
