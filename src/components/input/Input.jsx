import React from 'react';

const Input = (type, name) => (
    <input 
        type={type}
        name={name}
        type="text" placeholder="search hero"
    />
);

export default Input;