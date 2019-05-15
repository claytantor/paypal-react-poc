import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'; //imports fine

//fails to import
import paypal from '@paypal/checkout-components' 


let PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });


class PayPalButtonComponent extends React.Component {
  createOrder(data, actions) {
      return actions.order.create({
          purchase_units: [{
              amount: {
                  value: '0.01'
              }
          }]
      });
  }
  onApprove(data, actions) {
      return actions.order.capture();
  }
  render() {
      return (
          <PayPalButton
              createOrder={ (data, actions) => this.createOrder(data, actions) }
              onApprove={ (data, actions) => this.onApprove(data, actions) }
          />
      );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paypal POC</h1>
        <div>This is where we do it.</div>
        <div>
          hello world {moment.utc().format("YYYY-MM-DD HH:MM:SS")}
        </div>
      </header>
    </div>
  );
}

export default App;
