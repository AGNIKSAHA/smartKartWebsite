import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Homepage from './pages/Homepage';
import HomepageOne from './pages/HomepageOne';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage-one" element={<HomepageOne />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;