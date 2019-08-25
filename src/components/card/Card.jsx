import React from 'react';
import './Card.css';

const Card = ( {title, footer, children}) => (
    <div>
        <div className="card__title">{title}</div>
        <div className="card__children">{children}</div>
        <div className="card__footer">{footer}</div>
    </div>
);

export default Card;