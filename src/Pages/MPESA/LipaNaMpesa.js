import React, { useState } from 'react';
import axios from 'axios';
import './paynow.css';

function LipaNaMpesa() {
  const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.get('http://localhost:4000/stkpush', {
                params: {
                    phoneNumber,
                    amount
                }
            });
            setStatusMessage(response.data);
        } catch (error) {
            console.error('Payment initiation failed', error);
            setStatusMessage('Payment initiation failed');
        }
    };

  
  return (
    <div className="pay-now">
      <h2>LIPA NA MPESA Payment</h2>
      <input
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        <button onClick={handlePayment} type="submit">Pay Now</button>
      
        <p>{statusMessage}</p>
  
    </div>
  );
}

export default LipaNaMpesa;
