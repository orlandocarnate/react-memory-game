import React from 'react';

function CardContainer (props) {
 
    return (
      <div className="row">
      {props.children}
      </div>
    )
}

export default CardContainer
