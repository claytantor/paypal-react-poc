import './App.css';

import React from 'react';
import moment from 'moment'; //imports fine

import PaypalButton from './components/PaypalButton';

const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
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
        <div className="paypal-button-holder"><PaypalButton
            client={CLIENT}
            env={ENV}
            commit={true}
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