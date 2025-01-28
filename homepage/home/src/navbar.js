import React, { useState } from 'react';
import Hero from './herosection.js';
import logo from "./assets/logo.png"; 

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
          <a className="navbar-brand" href="#">
          <img src={logo} style={{
            height: "40px", marginRight: "10px", borderRadius: "25px" 
          }}/> GroceryStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleLogin}>
                      <i className="fa-solid fa-sign-in-alt"></i> Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link">
                      <i className="fa-solid fa-user-plus"></i> Signup
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa-solid fa-user"></i> Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa-solid fa-cogs"></i> Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa-solid fa-cart-shopping"></i> Cart
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                      <i className="fa-solid fa-sign-out-alt"></i> Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex ms-3" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fa-solid fa-search"></i>
              </button>
            </form>
          </div>
        </nav>
      </header>
      <Hero />
    </>
  );
}

export default Navbar;
