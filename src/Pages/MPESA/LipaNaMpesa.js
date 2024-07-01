import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './paynow.css';

function LipaNaMpesa() {
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState(null);
  const [password] = useState('4138551'); // Replace with actual password
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Function to get current timestamp in the required format (YYYYMMDDHHmmss)
    const getCurrentTimestamp = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);
      return `${year}${month}${day}${hours}${minutes}${seconds}`;
    };

    // Set initial timestamp when component mounts
    setTimestamp(getCurrentTimestamp());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://daraja-1any.onrender.com/stkpush', {
        BusinessShortCode: "4138551",
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: "10",
        PartyA: phone, // Phone number to receive the STK push
        PartyB: "4138551",
        PhoneNumber: phone, // Phone number initiating the payment
        CallBackURL: "https://dd3d-105-160-22-207.ngrok-free.app/callback",
        AccountReference: "TEST MPESA",
        TransactionDesc: "TEST MPESA APP"
      });
      setResponse(res.data);
      console.log('Response:', res.data);
      // Handle success scenario here, e.g., redirect or display a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenario here
    }
  };

  return (
    <div className="pay-now">
      <h2>LIPA NA MPESA Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </label>
        <br />
        <button type="submit">Pay 10 KES</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default LipaNaMpesa;
