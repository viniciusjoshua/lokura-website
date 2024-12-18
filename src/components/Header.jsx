import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export function Header() {
  return (
    <header>
      <div className="logo-container">
        <p className="slogan">The best drinks in the town</p>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/products">Products</Link>
            <ul>
              <li><Link to="/products/red-wine">Red Wine</Link></li>
              <li><Link to="/products/rose">Rose</Link></li>
              <li><Link to="/products/other-products">Other Products</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;