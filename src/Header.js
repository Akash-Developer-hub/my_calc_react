import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>E-Commerce Website</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/products"><FaBox /> Products</Link></li>
          <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
