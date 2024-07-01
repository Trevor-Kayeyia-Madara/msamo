import React, {useState} from 'react'
import axios from 'axios';
import './paynow.css';

function LipaNaMpesa() {
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/mpesa/stkpush', {
        phone: '0757552304', // Hardcoded for testing
        amount: '20',
        accountReference: 'Payment for test',
        transactionDesc: 'Testing MPESA payment'
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
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
        <button type="submit">Pay 20 KES</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
  </div>
  )
}

export default LipaNaMpesa