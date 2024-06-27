import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/index';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' component={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
