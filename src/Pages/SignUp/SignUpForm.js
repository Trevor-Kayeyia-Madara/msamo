import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the default CSS

import './SignUpForm.css';

const SignUpForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    role: '',
    email_address: '',
    phone_number: '',
    preferred_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://msamo-backend.onrender.com/signup', formData);
      console.log(response.data);
      setFormData({
        first_name: '',
        last_name: '',
        company_name: '',
        role: '',
        email_address: '',
        phone_number: '',
        preferred_password: ''
      });

      // Show success toast
      toast.success('Sign up successful! Redirecting to login...', {
        autoClose: 3000, // Close the toast after 3 seconds
        onClose: () => navigate('/login') // Redirect to login page after toast is closed
      });
    } catch (error) {
      console.error('There was an error signing up!', error);
      // Show error toast
      toast.error('Error signing up. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Company Name:
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Role:
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Landlord">Landlord</option>
          <option value="Tenant">Tenant</option>
          <option value="Property Owner">Property Owner</option>
        </select>
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          name="email_address"
          value={formData.email_address}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Preferred Password:
        <input
          type="password"
          name="preferred_password"
          value={formData.preferred_password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit" className="submit-button">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
