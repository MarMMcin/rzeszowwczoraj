import React, { useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as destroyedPlaces from "../Maps/destroyedPlaces.json";

import mapStyle from "../Maps/mapstyle";
import { NavLink } from "react-router-dom";

const StyledMap = styled.div``;
const StyledP = styled.p`
  font-weight: 800;
  font-size: 18px;
`;
const StyledImg = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
function Map() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <StyledMap>
      <GoogleMap
        defaultZoom={15.5}
        defaultCenter={{ lat: 50.037357, lng: 22.004914 }}
        defaultOptions={{ styles: mapStyle }}
      >
        {destroyedPlaces.features.map(place => (
          <Marker
            key={place.properties.PLACE_ID}
            position={{
              lat: place.geometry.coordinates[0],
              lng: place.geometry.coordinates[1]
            }}
            onClick={() => {
              setSelectedPlace(place);
            }}
            icon={{
              url: `${place.properties.PHOTO}`,
              scaledSize: new window.google.maps.Size(35, 35)
            }}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.coordinates[0],
              lng: selectedPlace.geometry.coordinates[1]
            }}
            onCloseClick={() => {
              setSelectedPlace(null);
            }}
          >
            <div>
              <StyledP>{selectedPlace.properties.NAME}</StyledP>
              <p>{selectedPlace.properties.DESCRIPTION}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={selectedPlace.properties.PHOTO}
              >
                {" "}
                <StyledImg src={selectedPlace.properties.PHOTO} alt="" />
              </a>

              <p>autor/źródło: {selectedPlace.properties.AUTHOR}</p>
              {/* <NavLink
                className="navlinks"
                to={`/${selectedPlace.properties.NAVLINK}`}
              >
                <p>Wiecej informacji</p>
              </NavLink> */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </StyledMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "calc(100vh - 106px)" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=       AIzaSyCK8mLt87fxFOjBquBP6PLmXB8xZjh7O7w`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
