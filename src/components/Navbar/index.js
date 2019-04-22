import React from 'react';
import "./style.css";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <div className="nav-link">{props.status}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Score: <span>{props.score}</span></div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Top Score: <span>{props.topscore}</span></div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
