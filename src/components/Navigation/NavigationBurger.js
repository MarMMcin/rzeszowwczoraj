import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const list = [
  { name: "O nas", path: "/", exact: true },
  { name: "Dawniej i dziś", path: "/beforeaftermobile" },
  { name: "Mapa zniszczeń", path: "/zniszczenia" },
  { name: "Galeria", path: "/pozostale" },
  { name: "Artykuły", path: "/artykuly" },
  { name: "Kontakt", path: "/kontakt" }
];
const NavigationBurger = () => {
  const menu = list.map(item => (
    <li className="li2" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#ec7801"
        }}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <div>{menu}</div>
    </nav>
  );
};

export default withRouter(NavigationBurger);
