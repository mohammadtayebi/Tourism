import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper className="navbar navbar-expand-lg navbar-black bg-white flex-row-reverse py-4">
      <Link
        to="/"
        className="navbar-brand"
        href="#"
        style={{ color: "#ff7f47", fontSize: "2rem", fontStyle: " oblique" }}
      >
        Damavand
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse text-right"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">
              خانه <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tourism_sites" className="nav-link" href="#">
              مناطق دیدنی
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" href="#">
              گالری
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              درباره ما
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className="dropdown-item" href="#">
                درباره شهر
              </Link>
              <Link to="/" className="dropdown-item" href="#">
                رستوران ها
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item" href="#">
                هتل ها
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact_us" className="nav-link">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .dropdown-menu {
    right: 0 !important;
  }
  a {
    transition: all 0.3s ease-in-out !important;
    font-size: 20px;
  }
  a:hover {
    text-decoration: none;
    color: #ff7f47 !important;
  }
`;
export default Navbar;
