import React from "react";
import Nav2 from "../Navigation/NavigationBurger";
import styled from "styled-components";

const Container = styled.div`

    .side-drawer {
      height: 100%;
      background-color: rgba(256, 256, 256, 0.9);
      position: fixed;
      top: 0;
      left: 0;
      list-style: none;
      width: 70%;
      max-width: 400px;
      z-index: 200;
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
    }
    .side-drawer.open {
      transform: translateX(0);
    }

    .side-drawer ul {
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-top: 20%;
      margin-left: 10%;
    }
    .side-drawer li {
      margin: 0.5rem;
    }
    .side-drawer a {
      color: #333;
      text-decoration: none;
      font-size: 1.2rem;
    }

    .side-drawer a:hover {
      color: #ec7801;
    }

    @media (min-width: 769px) {
      .side-drawer {
        display: none;
      }
    }
  }
`;

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }
  return (
    <Container>
      <nav className={drawerClasses.join("")}>
        <ul>
          <Nav2 />
        </ul>
      </nav>
    </Container>
  );
};
export default sideDrawer;
