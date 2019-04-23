import React from 'react';
import "./style.css";

function CardContainer(props) {

  return (
    <div className={props.classState}>
      <div className="row d-flex justify-content-center">
        {props.children}
      </div>
    </div>
  )
}

export default CardContainer
