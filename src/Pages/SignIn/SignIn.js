import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

const SignInForm = () => {
  const [credentials, setCredentials] = React.useState({
    phone_number: '',
    preferred_password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://msamo-backend.onrender.com/signin', credentials);
      const user = response.data.user;
      if (user) {
        toast.success('Login successful!', {
          position: "top-center",
          autoClose: 3000,
          onClose: () => navigate('/payment')
        });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('There was an error signing in!', error);
      toast.error('Login failed. Please check your credentials and try again.', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone_number"
          value={credentials.phone_number}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="preferred_password"
          value={credentials.preferred_password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
      </form>

      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
