import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Armory from './pages/Armory';
import About from './pages/About';
import Login from './pages/Login';
import './Styles/App.css';


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
        <Route path="/about" element={<About />} />
        {/* Other routes can be added here as needed */}
      </Routes>
      
    </>
  );
}

export default App;
