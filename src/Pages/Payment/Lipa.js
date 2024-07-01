import React from 'react';
import './paynow.css';

function Pay() {
  return (
    <div className="pay-now">
    <h2>Complete Payment</h2>
    <p>Please use the following details to complete your payment:</p>
    <ul>
      <li><strong>Paybill Number:</strong> 123456</li>
      <li><strong>Account Number:</strong> Your phone number</li>
      <li><strong>Amount:</strong> Enter the amount as agreed</li>
    </ul>
    <p>Once payment is completed, you will receive a confirmation message.</p>
  </div>
  )
}

export default Pay