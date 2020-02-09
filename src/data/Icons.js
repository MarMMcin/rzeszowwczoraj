import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import React, { Component } from "react";

let icons = parkData.features.map(park => (
  <img src={park.properties.PHOTO} alt="" />
));

export const icon = new Icon({
  iconUrl: { icons },
  iconSize: [25, 25]
});
