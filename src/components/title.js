import React from 'react';

// Dumb Component
function Title (props) {
    return (
      <div>
        <h1 className="text-center"><img alt='Pokemon Logo' src='./images/pokemon-logo.svg' /> {props.title}</h1>
      </div>
    );
}

export default Title;
