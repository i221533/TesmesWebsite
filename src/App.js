import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fotter from './components/Fotter';
import Home from './Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
        <Fotter/>
      </div>
    </Router>
  );
}

export default App;