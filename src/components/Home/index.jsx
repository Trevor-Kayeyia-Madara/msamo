import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [view, setView] = useState('home');

  const handleButtonClick = (action) => {
    setView(action);
  };

  return (
    <div style={styles.container}>
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
          <p style={styles.paragraph}>The property owners can manage their properties, view tenant applications, and more...</p>
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
