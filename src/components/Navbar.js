import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const txtcolor = {
    color: props.mode == "dark" ? "white" : "black",
  };
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: props.mode == "light" ? "#e2e2e2" : "black",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={txtcolor}>
          {props.mainTitle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={txtcolor}
                onClick={() => navigate("/")}
              >
                {props.subTitle}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={txtcolor}
                onClick={() => navigate("/about")}
              >
                {props.About}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={txtcolor}
            >
              Switch mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  About: PropTypes.string,
};
