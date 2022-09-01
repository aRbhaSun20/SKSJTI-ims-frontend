import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./professor.css";
function MapDetails({ position, setPosition }) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        style={{ width: "100%" }}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <StartUp setPosition={setPosition} />
      </MapContainer>
      <div className="avatar-profile-cont">
        <Avatar
          color="primary"
          className="avatar-profile"
          sx={{ bgcolor: deepPurple[500], width: "3rem", height: "3rem" }}
        >
          A
        </Avatar>
      </div>
    </div>
  );
}

export default MapDetails;

const StartUp = ({ setPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const location = [coords.latitude, coords.longitude];
        setPosition(location);
        map.flyTo(location, map.getZoom());
      });
    } // eslint-disable-next-line
  }, []);
  return null;
};
