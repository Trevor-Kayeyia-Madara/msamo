import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';
import { FaHome } from 'react-icons/fa'; // Import CSS for loading spinner

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
      <FaHome className="icon" />
      <h1 className="heading">Msamo Homes</h1>
    </div>
  );
};

export default Loading;
