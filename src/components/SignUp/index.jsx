import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    password: '',
    emailVerificationCode: '',
    phoneVerificationCode: '',
  });

  const [verificationCodes, setVerificationCodes] = useState({
    emailSent: false,
    phoneSent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmailVerification = () => {
    // Logic to send email verification code
    // This is a placeholder, replace with your actual email verification logic
    setVerificationCodes((prevCodes) => ({
      ...prevCodes,
      emailSent: true,
    }));
    alert('Email verification code sent');
  };

  const handleSendPhoneVerification = () => {
    // Logic to send phone verification code
    // This is a placeholder, replace with your actual phone verification logic
    setVerificationCodes((prevCodes) => ({
      ...prevCodes,
      phoneSent: true,
    }));
    alert('Phone verification code sent');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to backend
    console.log('Form submitted', formData);

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming successful signup, navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      // Handle error state or display an error message to the user
    }
  };

  // useEffect example (if needed for other purposes)
  useEffect(() => {
    // Example of using useEffect for other side effects
    // You can add dependencies if necessary
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <button
              type="button"
              onClick={handleSendEmailVerification}
              style={styles.button}
            >
              Send Verification Code
            </button>
          </label>
          {verificationCodes.emailSent && (
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Email Verification Code:
                <input
                  type="text"
                  name="emailVerificationCode"
                  value={formData.emailVerificationCode}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </label>
            </div>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <button
              type="button"
              onClick={handleSendPhoneVerification}
              style={styles.button}
            >
              Send Verification Code
            </button>
          </label>
          {verificationCodes.phoneSent && (
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Phone Verification Code:
                <input
                  type="text"
                  name="phoneVerificationCode"
                  value={formData.phoneVerificationCode}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </label>
            </div>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default SignUp;
