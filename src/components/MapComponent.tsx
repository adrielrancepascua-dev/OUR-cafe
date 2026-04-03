'use client';

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Fix standard leaflet icons
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

export default function MapComponent() {
  const position: [number, number] = [15.0286, 120.6729];

  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      scrollWheelZoom={false} 
      zoomControl={false}
      className="w-full h-full rounded-2xl z-10"
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position}>
        <Popup className="font-sans font-bold">
          <div className="text-center">
            <span className="block text-lg font-bold text-stone-900">OUR Cafe</span>
            <span className="block text-sm text-stone-600 font-medium">San Fernando, Pampanga</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}