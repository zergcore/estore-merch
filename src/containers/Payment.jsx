import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css';


function Payment() {
  const {state, handleSumTotal, addNewOrder}= useContext(AppContext)
  const {cart, buyer} = state;
  const navigate = useNavigate()
  const paypalOptions = {
    clientId: '',
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles={
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) =>{
    if(data.status==='COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      console.log(newOrder)
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  const handleClick = () =>{
    console.log(paypalOptions)
    console.log(buttonStyles)
    console.log(handleSumTotal())
    handlePaymentSuccess({
      status:'COMPLETED'
    })
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
              <div className="Payment-item" key={item.title}>
                <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
              </div>
            ))}
        <div className="Payment-button">
          <button type='button' onClick={handleClick}>
            <i className="fa-brands fa-cc-paypal"/>
          </button>
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment