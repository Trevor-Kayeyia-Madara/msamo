import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

const Home = () => {
  const [view, setView] = useState('home');

  const handleButtonClick = (action) => {
    setView(action);
  };

  return (
    <div className="home-container">
      <div className="content">
        {view === 'home' && (
          <>
            <h1 className="title">ARE YOU A:</h1>
            <div className="buttonContent">
              <button className="button" onClick={() => handleButtonClick('landlord')}>Landlord</button>
              <button className="button" onClick={() => handleButtonClick('tenant')}>Tenant</button>
              <button className="button" onClick={() => handleButtonClick('sellLand')}>Sell Land</button>
              <button className="button" onClick={() => handleButtonClick('sellHome')}>Sell Home</button>
            </div>
          </>
        )}

        {view === 'landlord' && (
          <div className="landlordSection">
            <h1 className="heading">Landlords/Home Owners</h1>
            <p className="paragraph">
              The Property owners will be able to get rid of third party fees such as house agents which sometimes become too pricey for them. 
              The Property owners will be able to log into and download the Mobile App, sign up, fill in their details, upload photos together 
              with their locations, pay and launch their products. An introductory fee of sh 5000/- will be charged per month for the Property 
              owners to advertise and reach a wide range of clients and customers all across 47 counties. This equates to only sh 167/- per day. 
              In most instances, once settled for a property, the agents charge the property owners up to 50% of the total house rent. 
              <br />
              <b>Msamo Properties App is here to relieve the property owners of huge charges by agents and brokers.</b>
            </p>
            <div className="buttonContainer">
              <button to="/sign-up" className="signup-button">Sign up</button>
              <button to="/login" className="login-button">Login</button>
            </div>
          </div>
        )}

        {view === 'tenant' && (
          <div className="tenantSection">
            <h1 className="heading">Tenants</h1>
            <p className="paragraph">
              Msamo Properties App relieves the tenants and those searching for a home the stress of dealing with agents who  sometimes take advantage of them.
              Our App will link tenants directly to the Landlords. The tenant and the Landlord will be able to interact and agree to 
              transact without any third parties involved. Looking for a house in major cities can be hectic with agents not meeting their parts
              of their bargain, sometimes you have to got through three to four agents at a fee before you can get lucky to find the property 
              or house of your choice. You will only pay a monthly fee of ksh 2000/- and daily rate of 67 sh for 30 days as you filter through your searches to find a home
              or a unit of your choice. <br />
              <b>EPUKA KUGONGWA NA AGENTS</b>
            </p>
            <div className="buttonContainer">
              <button to="/sign-up" className="signup-button">Sign up</button>
              <button to="/login" className="login-button">Login</button>
            </div>
          </div>
        )}

        {view === 'sellLand' && (
          <div className="sellLandSection">
            <h1 className="heading">Sell Land</h1>
            <p className="paragraph">
              Want an easier and Convinient way of reaching your potential buyers? look no further. At a monthly subscription fee of just KES 15,000/- and a daily rate of Ksh 5,00/-
              you will be able to dodge third party fees and broker fees
              <br />
              <b>JISIMAMIE !</b>
            </p>
            <div className="buttonContainer">
              <button to="/sign-up" className="signup-button">Sign up</button>
              <button to="/login" className="login-button">Login</button>
            </div>
          </div>
        )}

        {view === 'sellHome' && (
          <div className="sellHomeSection">
            <h1 className="heading">Sell Home</h1>
            <p className="paragraph">
              The Property owners will be able to get rid of third party fees such as house agents which sometimes become too pricey for them. 
              Want an easier and Convinient way of reaching your potential buyers? look no further. At a monthly subscription fee of just KES 15,000/- and a daily rate of Ksh 5,00/-
              you will be able to dodge third party fees and broker fees
              <br />
              <b>JISIMAMIE !</b>
            </p>
            <div className="buttonContainer">
              <button to="/sign-up" className="signup-button">Sign up</button>
              <button to="/login" className="login-button">Login</button>
            </div>
          </div>
        )}
     
      </div>
    </div>
  );
};

export default Home;
