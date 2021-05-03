import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 24.363588,
  lng: 88.624138,
};

const ReactMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDCxO0CXhGL_Zjd4FUN0ve0xOfS_FV4kGs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker LatLng="24.363588" LatLngLiteral="88.624138" />
      </GoogleMap>
    </LoadScript>
  );
};

export default ReactMap;
