import React from 'react';

const Button = (props) => (
    <button className={props.type} onClick={props.event} disabled={props.state}>{props.title}</button>
);

export default Button;