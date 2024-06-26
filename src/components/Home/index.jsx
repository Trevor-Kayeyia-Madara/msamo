import React, { useState } from 'react';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {selectedOption === null ? (
        <div>
          <h1>Are you a:</h1>
          <button onClick={() => handleOptionClick('Landlord')}>Landlord</button>
          <button onClick={() => handleOptionClick('Tenant')}>Tenant</button>
          <button onClick={() => handleOptionClick('Sell Land')}>Sell Land</button>
          <button onClick={() => handleOptionClick('Sell Home')}>Sell Home</button>
        </div>
      ) : (
        <div>
          <h1>{selectedOption}</h1>
          <button onClick={() => setSelectedOption(null)}>Go Back</button>
          {selectedOption === 'Tenant' && (
            <div>
              <h2>RENEW SUBSCRIPTION</h2>
              <p>Pay Renew. Details still in database.</p>
              {/* You can add more details or functionalities here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
