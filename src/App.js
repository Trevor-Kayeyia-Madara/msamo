import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import Loader from './Components/Loader';
import SignIn from './Pages/SignIn/SignIn';
import TenantForm from './Pages/Tenant';
import LandlordForm from './Pages/Landlord';
import Pay from './Pages/Payment/pay';
import SignUpForm from './Pages/SignUp/SignUpForm';
import './App.css'
import Payment from './Pages/Payment';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path='/pay-now' element={<Pay />} />
          <Route path="/landlord-form" element={<LandlordForm />} />
          <Route path="/tenant-form" element={<TenantForm />} />
        <Route path="/login" element={<SignIn />} />
          <Route path='/' element={<Loader />} />
          <Route path='/payment' element={<Payment />} />
       
        <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
