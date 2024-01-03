import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Armory from './pages/Armory';
import './pages/App.css';

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNavBar />
    </BrowserRouter>
  );
}

function RoutesWithNavBar() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/armory';

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/armory" element={<Armory />} />
        {/* Other routes can be added here as needed */}
      </Routes>
    </>
  );
}

export default App;
