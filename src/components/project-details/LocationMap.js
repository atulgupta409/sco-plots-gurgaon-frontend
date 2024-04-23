import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationMap = ({ name, lattitude, longitude }) => {
  const position = [lattitude, longitude];

  return (
    <div className="container mt100">
      <div>
        <h2 className="h2_headings text-center mob_hide">
          {name} <span className="text_shadow">Map</span>
        </h2>
        <h2 className="h2_headings desk_hide">
          <span className="text_shadow">Location Map</span>
        </h2>
      </div>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}@2x.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
