// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fake News Detection</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
