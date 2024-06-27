import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Landlord from './components/Landlord';
import Tenant from './components/Tenant';
import SellLand from './components/SellLand';
import SellHome from './components/SellHome';
import SignUp from './components/SignUp/index';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/tenant" element={<Tenant />} />
        <Route path="/sell-land" element={<SellLand />} />
        <Route path="/sell-home" element={<SellHome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
