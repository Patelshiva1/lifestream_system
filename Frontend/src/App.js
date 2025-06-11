import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DonorRegistration from './pages/DonorRegistration';
import RequestBlood from './pages/RequestBlood';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav
          className="navbar"
          style={{ backgroundColor: '#c62828', padding: '1rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h1 style={{ color: '#fff' }}>LifeStream Blood Network</h1>
            <p style={{ fontStyle: 'italic', color: '#fff', marginTop: '-10px' }}>
              A Blood Bank Management System.
            </p>
          </div>
          <div className="nav-buttons">
            <Link to="/">
              <button> Home</button>
            </Link>
            <Link to="/register">
              <button> Donor Registration</button>
            </Link>
            <Link to="/request">
              <button>Request Blood</button>
            </Link>
            <Link to="/about">
              <button> About Us</button>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorRegistration />} />
          <Route path="/request" element={<RequestBlood />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <footer
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem 0',
            borderTop: '1px solid #ddd',
            backgroundColor: '#000',  // black background
            color: '#fff',            // white text
          }}
        >
          <p style={{ margin: '0.5rem 0' }}>Thank you!!</p>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} LifeStream Blood Network
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
