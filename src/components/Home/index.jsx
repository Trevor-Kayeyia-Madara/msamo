import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="container">
      <h1>ARE YOU A:</h1>
      <div className="button-group">
        <button 
          className="button"
          onClick={() => {/* Handle Landlord button click */}}
        >
          Landlord
        </button>
        <button 
          className="button"
          onClick={() => {/* Handle Tenant button click */}}
        >
          Tenant
        </button>
        <button 
          className="button"
          onClick={() => {/* Handle Sell Land button click */}}
        >
          Sell Land
        </button>
        <button 
          className="button"
          onClick={() => {/* Handle Sell Home button click */}}
        >
          Sell Home
        </button>
        <button 
          className="button"
          onClick={() => {/* Handle Renew Subscription button click */}}
        >
          RENEW SUBSCRIPTION
        </button>
      </div>
    </div>
  );
}

export default Home;