import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing marker issue in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const GoogleContactMap = ({ type }) => {  
  return (
    <>
      {type === "google" ? (
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Mumbai,India&output=embed"
        ></iframe>
      ) : type === "leaflet" ? (
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={12}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[19.076, 72.8777]} icon={customIcon}>
            <Popup>Mumbai, India</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>No map type selected</p>
      )}
    </>
  );
};

export default GoogleContactMap;
