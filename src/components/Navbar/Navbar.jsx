import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Hexashop Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li> <Link to="/men">Men's</Link></li>
        <li><Link to="/women">Women's</Link></li>
        <li><Link to="/kid">Kid's</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
      <motion.div className="navbar-auth"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      >
        <a href="/signup" className="signup">Sign Up</a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
