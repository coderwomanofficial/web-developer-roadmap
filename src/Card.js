import React from 'react';

const Card = ({ name, title, type = 'child' }) => (
  <div className={`card ${type === 'parent' ? 'parent' : 'child'}`}>
    {name && <h1>{name}</h1>}
    {title && <h2>{title}</h2>}
  </div>
);
export default Card;
