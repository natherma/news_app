import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >NewsNow</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" id='home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/international" >International</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crypto" >Crypto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" >About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
