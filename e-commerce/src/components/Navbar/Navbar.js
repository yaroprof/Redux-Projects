import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Top Navbar */}
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/" className="navbar-brand">
              <span className="text-regal-blue">Shopping</span>
              <span className="text-gold">Hub.</span>
            </Link>

            <form className="navbar-search flex">
              <input type="text" placeholder="Search here..." />
              <button type="submit" className="navbar-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="navbar-btns">
              <Link className="add-to-cart-btn flex">
                <span className="btn-ico">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <div className="btn-txt fw-5">
                  cart
                  <span className="cart-count-value">Total:</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
{/* Bottom Navbar */}
        <div className="navbar-bottom bg-regal-blue">
          <div className="container flex flex-between">
            <ul>
              <button type='button' className="navbar-hide-btn text-white">
                <i className="fas fa-times"></i>
              </button>
              <li className='nav-link text-white'>category name</li>
            </ul>

            <button ype='button' className="navbar-show-btn text-gold">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
