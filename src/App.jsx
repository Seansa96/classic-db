
import wowLogo from './assets/WoW_icon.svg'
import './App.css'
import NavBar from './NavBar'
import { Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Router>
      <NavBar />
      <div>
       
        <a href="https://vitejs.dev" target="_blank">
          <img src={wowLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>A simple gearing database</h1>
      <div className="card">
        <button>
          Start Gearing
        </button>
        
      </div>
      <p className="slogan">
        Just a few clicks away from BIS
      </p>
      </Router>
    </>
  )
}

export default App
