import React, { Component } from 'react';
import PropTypes from 'prop-types';

function CardContainer (props) {
 
    return (
      <div className="row">
      {props.children}
      </div>
    )
}

export default CardContainer
