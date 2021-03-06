import React, { useState } from "react";
import Merch from "../assets/Frame (1).png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isAdmin] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          <img src={Merch} alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                <strong></strong>
              </a>
            </li>
          </ul>
          <form className="d-flex">
            {isAdmin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex">
                  <NavLink className="nav-link fs-5" aria-current="page" to="/user-complain" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Complain</strong>
                  </NavLink>
                  <NavLink className="nav-link fs-5" aria-current="page" to="/profile" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Pofile</strong>
                  </NavLink>
                  <NavLink className="nav-link fs-5" aria-current="page" to="/" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Logout</strong>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex">
                  <NavLink className="nav-link fs-5" aria-current="page" to="/admin-complain" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Complain</strong>
                  </NavLink>
                  <NavLink className="nav-link fs-5" aria-current="page" to="/category" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Category</strong>
                  </NavLink>
                  <NavLink className="nav-link fs-5" aria-current="page" to="/product" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Product</strong>
                  </NavLink>
                  <NavLink className="nav-link fs-5" aria-current="page" to="/" style={({ isActive }) => ({ color: isActive ? "#f74d4d" : "#ffffff" })}>
                    <strong>Logout</strong>
                  </NavLink>
                </li>
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
