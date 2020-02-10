import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as parkData from "./parks.json";
import styled from "styled-components";
import { Icon } from "leaflet";
import ShowHide from "./PopUp";
import Vehicles from "./Vehicles";

const StyledPopup = styled(Popup)`
  z-index: -1;
`;
const StyledShowHide = styled(ShowHide)``;
const StyledVehicles = styled(Vehicles)``;
const Container = styled.div`
  .imagecont {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    transition: 0.1s;
  }

  .insidePhoto:hover {
    transform: scale(4);
    z-index: 5000;
  }
  a {
  }

  .leaflet-container {
    height: calc(100vh - 121px);
    width: 100vw;
  }
  .insidePhoto {
    max-width: 200px;
    max-height: 200px;
    border: 1px solid black;
    transition: 0.6s;
  }

  @media (max-width: 769px) {
    .leaflet-container {
      height: calc(100vh - 56px);
    }
    .insidePhoto {
      border: 1px solid black;
      max-width: 150px;
      max-height: 150px;
    }
  }
`;
export const icon = new Icon({
  iconUrl: "https://i.imgur.com/reqn45t.png",
  iconSize: [40, 40]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Container>
      <StyledShowHide>
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
          <div className="popup">
            <StyledPopup
              position={[
                activePark.geometry.coordinates[0],
                activePark.geometry.coordinates[1]
              ]}
              onClose={() => {
                setActivePark(null);
              }}
            >
              <h2>{activePark.properties.NAME}</h2>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={activePark.properties.PHOTO}
              >
                {" "}
                <img
                  className="insidePhoto"
                  src={activePark.properties.PHOTO}
                  alt=""
                />
              </a>

              <p>{activePark.properties.DESCRIPTION}</p>
              <p>Żródło: {activePark.properties.AUTHOR}</p>
            </StyledPopup>
          </div>
        )}
      </Map>
    </Container>
  );
}
