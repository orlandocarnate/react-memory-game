import React from 'react';
import "./style.css";

function CardContainer(props) {

  return (
    <div className={props.classState}>
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}

export default CardContainer
