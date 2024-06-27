import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>ARE YOU A:</h1>
      <button onClick={() => {/* Handle Landlord button click */}}>Landlord</button>
      <button onClick={() => {/* Handle Tenant button click */}}>Tenant</button>
      <button onClick={() => {/* Handle Sell Land button click */}}>Sell Land</button>
      <button onClick={() => {/* Handle Sell Home button click */}}>Sell Home</button>
      <button onClick={() => {/* Handle Renew Subscription button click */}}>RENEW SUBSCRIPTION</button>
    </div>
  );
}

export default Home;
