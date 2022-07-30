import React from 'react';

const Card = ({ name, title, className, hasChildren = false, number }) => (
  <div className={`card ${className}`}>
    {number && <span className={`${className}span`}>{number}</span>}
    {name && <h1>{name}</h1>}
    {title && <h2>{title}</h2>}
  </div>
);
export default Card;
