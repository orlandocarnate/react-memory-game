import React from 'react';
import "./style.css";
function Navbar(props) {
  return (
    <div className="nav-bg py-2">
      <div className="container">
        <nav className="nav d-flex justify-content-between">
          <a className="nav-item align-self-start hvr-pokeball-grow" href="/"><img className="pokeball" src="./images/pokeball.png" /></a>
          <h3 className="nav-item align-self-center"><span className={"status " + props.statusState}>{props.status}</span></h3>
          <div className="align-self-end">
            <h5 className="scores nav-item">Score: <span>{props.score}</span></h5>
            <h5 className="scores nav-item">Top Score: <span>{props.topscore}</span></h5>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
