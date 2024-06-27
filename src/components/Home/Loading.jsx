import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'; // Import CSS for loading spinner

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading process
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 2000); // Adjust as needed

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
