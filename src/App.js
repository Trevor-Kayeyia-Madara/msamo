import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/index';
import Loader from './Components/Loader';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Loader />} />
        <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
