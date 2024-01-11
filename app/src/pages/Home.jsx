import React from 'react';
import { Link } from 'react-router-dom';
import wowLogo from '../assets/WoW_icon.svg';
import '../Styles/App.css';
import '../Styles/index.css';

const Home = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={wowLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>A simple gearing database</h1>
      <div className="card">
        <Link to="/armory">
          <button>Start Gearing</button>
        </Link>
      </div>
      <p className="slogan">Just a few clicks away from BIS</p>
    </div>
  );
};

export default Home;
