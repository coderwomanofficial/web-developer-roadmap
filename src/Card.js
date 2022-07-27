import React from 'react';

const Card = ({ name, title, className, hasChildren = false, index }) => (
  <div className={`card ${className}`}>
    {console.log(index)}
    {index >= 0 && <span className={`${className}span`}>{index + 1}</span>}
    {name && <h1>{name}</h1>}
    {title && <h2>{title}</h2>}
  </div>
);
export default Card;
