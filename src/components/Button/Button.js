import React from 'react';
import './Button.css';


const Button = ({classes, command, text}) => (
  <button className={classes} onClick={command}>
    <span>{text}</span>
  </button>
);

export default Button;
