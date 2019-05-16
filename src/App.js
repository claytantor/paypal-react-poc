import './App.css';

import React from 'react';
import moment from 'moment'; //imports fine

import PaypalButton from './components/PaypalButton';

const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
};

const buttonItem = 
  {
    name: "Flashlex Sapphire 30",
    description: "30 day subscription to the flashlex service.",
    quantity: 1,
    price: 19,
    tax: 0.00,
    sku: "SUBSAP101",
    currency: "USD"
  };

console.log("client", CLIENT);

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

function App() {
  const onSuccess = (payment) =>
    console.log('Successful payment!', payment);

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Paypal POC</h1>
        <div>This is where we do it.</div>
        <div>
          hello world {moment.utc().format("YYYY-MM-DD HH:MM:SS")}
        </div>
        <div className="paypal-button-holder">
        <PaypalButton
            userId="ecd13b11-6d91-4e8e-9156-60e451a3c975"
            product="sapphire_30"
            client={CLIENT}
            env={ENV}
            commit={true}
            item={buttonItem}
            currency={'USD'}
            total={19}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel}
          />
        </div>
      </header>
    </div>
  );
}

export default App;