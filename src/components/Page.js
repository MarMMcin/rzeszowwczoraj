import React from "react";
import { Route, Switch } from "react-router-dom";
import OFirmie from "../components/OFirmie";
import BeforeAfter from "../components/BeforeAfter/BeforeAfterComponent";
import BeforeAfterRespons from "../components/BeforeAfter/BeforeAfterComponentRespons";
import MainPage from "../components/MainPage/MainPage";
import OpenMap from "./OpenMap";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;

  z-index: -15;
`;
const Page = () => {
  return (
    <>
      <Div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/ofirmie" exact component={OFirmie} />
          <Route path="/beforeafter" component={BeforeAfter} />
          <Route path="/beforeaftermobile" component={BeforeAfterRespons} />
          <Route path="/zniszczenia" component={OpenMap} />{" "}
          <Route path="/pozostale" component={OFirmie} />
          <Route path="/artykuly" component={OFirmie} />
          <Route path="/kontakt" component={OFirmie} />
          <Route component={OFirmie} />
        </Switch>
      </Div>
    </>
  );
};

export default withRouter(Page);
