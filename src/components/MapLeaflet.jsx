import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/components/MapLeaflet.css';
import Icon from'../assets/icons/icon_map.png'

const position = [10.063611, -69.334724]

function MapLeaflet() {
  return (
    <MapContainer 
                center={position} 
                zoom={15} 
                scrollWheelZoom={false}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup icon={Icon}>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default MapLeaflet