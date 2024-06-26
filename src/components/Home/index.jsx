import React, { useState } from 'react';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setShowForm(true);
    // You can add additional logic here based on the selected option
  };

  return (
    <div className="property-app">
      <div className="main-buttons">
        <button className="main-button" onClick={() => handleButtonClick('Landlord')}>Landlord</button>
        <button className="main-button" onClick={() => handleButtonClick('Tenant')}>Tenant</button>
        <button className="main-button" onClick={() => handleButtonClick('Sell Land')}>Sell Land</button>
        <button className="main-button" onClick={() => handleButtonClick('Sell Home')}>Sell Home</button>
      </div>
      <div className="renew-subscription">
        <button className="renew-button">RENEW SUBSCRIPTION</button>
      </div>
      {showForm && (
        <div className="form-section">
          <h2>{selectedOption} Form</h2>
          {/* Add form fields based on selectedOption */}
          {/* Example: Landlord/Homeowner Form */}
          {/* Add form fields and logic here based on your requirements */}
        </div>
      )}
    </div>
  );
}
export default Home;
