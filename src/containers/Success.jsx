import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';
import MapLeaflet from '../components/MapLeaflet';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        {buyer.name ? (
          <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        )
        :
        (
          <h2>Fulano, Gracias por tu compra!</h2>
        )}
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map/>
        </div>
        <div className="Success-map">
          <MapLeaflet/>
        </div>
      </div>
    </div>
  )
}

export default Success