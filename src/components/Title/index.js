import React from 'react';
import "./style.css"
// Dumb Component
function Title(props) {
  return (
    <div className="my-1">
      <h1 className="text-center">
      <img className="logo" alt='Pokemon Logo' src='./images/pokemon-logo.svg' />
      {' '}<span className="title">{props.title}</span>
       </h1>
    </div>
  );
}

export default Title;
