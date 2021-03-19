import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
}

const wrappedMap = withScriptjs(withGoogleMap(Map));

function MapComponent() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <wrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCxO0CXhGL_Zjd4FUN0ve0xOfS_FV4kGs"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default MapComponent;
