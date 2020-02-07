import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Nav from "../Navigation/Navigation";
import LogoMapa from "../../images/logomapa.jpg";

const ToolbarHeader = styled.header`

  background-image: url(${LogoMapa});
  object-fit: cover;
  background-repeat: no-repeat;
height: 100px;
  width: 100%;

  border-bottom: 1px solid black;z-index: 100;

  .toolbar__navigation {  position: absolute

    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
  }

  .toolbar__logo {
    margin-left: 1rem;

    font-family: 'Amatic SC', cursive;
  }

  .toolbar__logo a {
    color: white;
    text-decoration: none;
    font-size: 4rem;
    color: #d9d9d9;
  }

  .spacer {
    flex: 1;
  }

  .toolbar_navigation-items ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .toolbar_navigation-items li {
    padding: 0 0.5rem;
  }

  .toolbar_navigation-items a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
  }

  .toolbar_navigation-items a:hover {
   border-bottom: 1px solid #ffff8d;
   color: #ffff8d;

  }

  }
  @media (max-width: 768px) {
    height: 56px;
    .toolbar_navigation-items {
      display: none;
    }
    .toolbar__logo a {
  
  display:none;
    }
  }

  @media (min-width: 769px) {
    .toolbar__toggle-button {
      display: none;
    }

    .toolbar__logo {
      margin-left: 0;
    } 
  }
`;

const toolbar = props => (
  <ToolbarHeader className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Rzeszów wczóraj, dziś i jutro</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <Nav></Nav>
        </ul>
      </div>
    </nav>
  </ToolbarHeader>
);

export default toolbar;
