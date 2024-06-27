import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>ARE YOU A:</h1>
      <button 
        className="btn btn-primary btn-lg d-block mx-auto my-3"
        onClick={() => {/* Handle Landlord button click */}}
      >
        Landlord
      </button>
      <button 
        className="btn btn-primary btn-lg d-block mx-auto my-3"
        onClick={() => {/* Handle Tenant button click */}}
      >
        Tenant
      </button>
      <button 
        className="btn btn-primary btn-lg d-block mx-auto my-3"
        onClick={() => {/* Handle Sell Land button click */}}
      >
        Sell Land
      </button>
      <button 
        className="btn btn-primary btn-lg d-block mx-auto my-3"
        onClick={() => {/* Handle Sell Home button click */}}
      >
        Sell Home
      </button>
      <button 
        className="btn btn-primary btn-lg d-block mx-auto my-3"
        onClick={() => {/* Handle Renew Subscription button click */}}
      >
        RENEW SUBSCRIPTION
      </button>
    </div>
  );
}

export default Home;
