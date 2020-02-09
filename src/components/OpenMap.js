import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as parkData from "./parks.json";
import styled from "styled-components";
import { Icon } from "leaflet";
import ShowHide from "./PopUp";
import Vehicles from "./Vehicles";

const StyledShowHide = styled(ShowHide)`
  transition: opacity 1s ease-in;
`;
const StyledVehicles = styled(Vehicles)`
  transition: opacity 1s ease-in;
`;
const Container = styled.div`
  .leaflet-container {
    height: calc(100vh - 121px);
    width: 100vw;
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }
  @media (max-width: 769px) {
    .leaflet-container {
      height: calc(100vh - 56px);
    }
    img {
      max-width: 150px;
      max-height: 150px;
    }
  }
`;
export const icon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 40]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Container>
      <StyledShowHide>
        {" "}
        <StyledVehicles />
      </StyledShowHide>

      <Map center={[50.037357, 22.004914]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkData.features.map(park => (
          <Marker
            key={park.properties.PLACE_ID}
            position={[
              park.geometry.coordinates[0],
              park.geometry.coordinates[1]
            ]}
            onClick={() => {
              setActivePark(park);
            }}
            icon={icon}
          />
        ))}

        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[0],
              activePark.geometry.coordinates[1]
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={activePark.properties.PHOTO}
              >
                {" "}
                <img src={activePark.properties.PHOTO} alt="" />
              </a>
              <p>{activePark.properties.DESCRIPTION}</p>
              <p>Żródło: {activePark.properties.AUTHOR}</p>
            </div>
          </Popup>
        )}
      </Map>
    </Container>
  );
}
