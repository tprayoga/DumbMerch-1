import React, { useState } from "react";
import Merch from "../assets/Frame (1).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={Merch} alt="" />
        </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" aria-current="page" to="/user-complain">
                  <strong>Complain</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" aria-current="page" to="/category">
                  <strong>Category</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" aria-current="page" to="/profile">
                  <strong>Pofile</strong>
                </Link>
              </li>
              {show ? (
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" aria-current="page" to="/product">
                    <strong>Product</strong>
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" aria-current="page" to="/">
                  <strong>Logout</strong>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
