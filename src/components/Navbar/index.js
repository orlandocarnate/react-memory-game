import React from 'react';
import "./style.css";
function Navbar(props) {
  return (
    <div className="nav-bg py-2">
      <div className="container">
        <nav className="nav d-flex justify-content-between">
          <h3><a className="nav-item align-self-start" href="/">Home <span className="sr-only">(current)</span></a></h3>
          <h3 className="nav-item align-self-center">{props.status}</h3>
          <div className="align-self-end">
            <h5 className="nav-item">Score: <span>{props.score}</span></h5>
            <h5 className="nav-item">Top Score: <span>{props.topscore}</span></h5>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
