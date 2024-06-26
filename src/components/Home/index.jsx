import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Are you a:</h1>
      <div>
        <Link to="/landlord"><button>Landlord</button></Link>
        <Link to="/tenant"><button>Tenant</button></Link>
        <Link to="/sell-land"><button>Sell Land</button></Link>
        <Link to="/sell-home"><button>Sell Home</button></Link>
      </div>
      <div>
        <button>RENEW SUBSCRIPTION</button>
      </div>
    </div>
  );
}

export default Home;
