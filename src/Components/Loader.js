import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css'; // Import your CSS for styling

const Loader = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a 3-second loading time
    setTimeout(() => {
      setLoading(false);
      navigate('/home'); // Navigate to home page after loading
    }, 3000);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return null; // Render nothing after loading completes
}

export default Loader;
