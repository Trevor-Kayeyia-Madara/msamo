import React, { useState } from 'react';
import axios from 'axios';
import './sign.css';  
import { useNavigate } from 'react-router-dom';// Import the CSS file

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    emailVerificationCode: '',
    phoneNumber: '',
    phoneVerificationCode: '',
    password: '',
  });

  // const [emailVerified, setEmailVerified] = useState(false);
  // const [phoneVerified, setPhoneVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleEmailVerification = () => {
  //   // Send verification code to email
  //   axios.post('http://localhost:5000/verify-email', { email: formData.email })
  //     .then(response => {
  //       alert('Verification code sent to your email.');
  //     })
  //     .catch(error => {
  //       console.error('Error sending email verification code:', error);
  //     });
  // };

  // const handlePhoneVerification = () => {
  //   // Send verification code to phone
  //   axios.post('http://localhost:5000/verify-phone', { phoneNumber: formData.phoneNumber })
  //     .then(response => {
  //       alert('Verification code sent to your phone.');
  //     })
  //     .catch(error => {
  //       console.error('Error sending phone verification code:', error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
    axios.post('http://localhost:5000/signup', formData)
      .then(response => {
        alert('Sign-up successful!');
        navigate('/login');
      })
      .catch(error => {
        console.error('Error during sign-up:', error);
      });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="input" />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Company Name:
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="input" />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
          
          </label>
        </div>
       
        <div className="formGroup">
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="input" />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Preferred Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="input" />
          </label>
        </div>
        <button type="submit" className="submitButton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
