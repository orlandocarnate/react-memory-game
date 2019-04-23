import React from 'react';
import "./style.css";
function Navbar(props) {
  return (
    <div className="nav-bg py-2">
      <div className="container">
        <ul className="nav d-flex flex-sm-row flex-column justify-content-between">
          <li className="nav-item align-self-start">
            <a className="hvr-pokeball-grow" href="/"><img className="pokeball" src="./images/pokeball.png" /></a>

          </li>
          <li className="nav-item align-self-center">
            <h3><span className={"status " + props.statusState}>{props.status}</span></h3>

          </li>
          <li className="d-flex flex-sm-row align-self-end">
            <h5 className="scores nav-item">Score: <span>{props.score}</span></h5>
            <h5 className="scores nav-item ml-2">Top Score: <span>{props.topscore}</span></h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
