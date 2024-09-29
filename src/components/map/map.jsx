import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  const [position, setPosition] = useState([52.4797, -1.90269]); // Default position (Birmingham, UK)

  // Use Geolocation API to get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]); // Update position with user's location
      },
      () => {
        console.error("Unable to retrieve your location"); // Error handling if geolocation fails
      }
    );
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items && items.length > 0 ? (
        items.map((item) => (
          <Pin item={item} key={item.id} /> // Render pins if items are available
        ))
      ) : (
        <p>No items to display</p> // Show a message when no items are available
      )}
    </MapContainer>
  );
}

export default Map;


//1:42:05