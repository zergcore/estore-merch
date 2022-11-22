import React from 'react';
import '../styles/components/Payment.css';

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          <button type='button'>
            <i className="fa-brands fa-cc-paypal"/>
          </button>
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment