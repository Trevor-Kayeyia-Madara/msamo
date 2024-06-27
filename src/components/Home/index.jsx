import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  const [view, setView] = useState('home');

  const handleButtonClick = (action) => {
    setView(action);
  };

  return (
    <div style={styles.container}>
        <FaHome style={styles.icon} />
        <h1 style={styles.heading}>Msamo Homes</h1>
      {view === 'home' && (
        <>
          <h1 style={styles.heading}>ARE YOU A:</h1>
          <button style={styles.button} onClick={() => handleButtonClick('landlord')}>Landlord</button>
          <button style={styles.button} onClick={() => handleButtonClick('tenant')}>Tenant</button>
          <button style={styles.button} onClick={() => handleButtonClick('sellLand')}>Sell Land</button>
          <button style={styles.button} onClick={() => handleButtonClick('sellHome')}>Sell Home</button>
          <button style={styles.button} onClick={() => handleButtonClick('renewSubscription')}>Renew Subscription</button>
        </>
      )}

      {view === 'landlord' && (
        <div style={styles.landlordSection}>
          <h1 style={styles.heading}>Landlords/Home Owners</h1>
          <p style={styles.paragraph}>The Property owners will be able to get rid of third party fees such as house agents which
            sometimes become to pricey for them. The Property owners will be able to log into and download Mobile App, sign up, fill in their
            details upload photos together with its locations , Pay and Launch their products.
            An introductory fee of sh 5000/- will be charged per month for the Property owners to advertise and reach wide range of clients 
            and customers all across 47 counties. This equates to only sh 167/- per day. In most instances once settles for a property, the 
            agents charge the property owners upto 50% of the total house rent. <b>Msamo Properties App is here to relieve the property owners of huge charges by agents and Brokers</b>
          </p>
          <Link to="/signup">
            <button style={styles.button}>Create Account</button>
          </Link>
        </div>
      )}

{view === 'tenant' && (
        <div style={styles.tenantSection}>
          <h1 style={styles.heading}>Tenants
          </h1>
          <p style={styles.paragraph}>
            Msamo Properties App relieves the tenants and those searching for  a home the stress
             <b>Msamo Properties App is here to relieve the property owners of huge charges by agents and Brokers</b>
          </p>
          <Link to="/signup">
            <button style={styles.button}>Create Account</button>
          </Link>
        </div>
      )}

{view === 'sellLand' && (
        <div style={styles.sellLandSection}>
          <h1 style={styles.heading}>Sell Land</h1>
          <p style={styles.paragraph}>The Property owners will be able to get rid of third party fees such as house agents which
            sometimes become to pricey for them. The Property owners will be able to log into and download Mobile App, sign up, fill in their
            details upload photos together with its locations , Pay and Launch their products.
            An introductory fee of sh 5000/- will be charged per month for the Property owners to advertise and reach wide range of clients 
            and customers all across 47 counties. This equates to only sh 167/- per day. In most instances once settles for a property, the 
            agents charge the property owners upto 50% of the total house rent. <b>Msamo Properties App is here to relieve the property owners of huge charges by agents and Brokers</b>
          </p>
          <Link to="/signup">
            <button style={styles.button}>Create Account</button>
          </Link>
        </div>
      )}

{view === 'sellHome' && (
        <div style={styles.sellHomeSection}>
          <h1 style={styles.heading}>Sell Home</h1>
          <p style={styles.paragraph}>The Property owners will be able to get rid of third party fees such as house agents which
            sometimes become to pricey for them. The Property owners will be able to log into and download Mobile App, sign up, fill in their
            details upload photos together with its locations , Pay and Launch their products.
            An introductory fee of sh 5000/- will be charged per month for the Property owners to advertise and reach wide range of clients 
            and customers all across 47 counties. This equates to only sh 167/- per day. In most instances once settles for a property, the 
            agents charge the property owners upto 50% of the total house rent. <b>Msamo Properties App is here to relieve the property owners of huge charges by agents and Brokers</b>
          </p>
          <Link to="/signup">
            <button style={styles.button}>Create Account</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  icon: {
    fontSize: '48px',
    marginBottom: '10px',
    color: '#007bff', // Example color
  },

  heading: {
    marginBottom: '20px'
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  landlordSection: {
    marginTop: '20px'
  },
  paragraph: {
    marginBottom: '20px'
  }
};

export default Home;
