import React from 'react';

function Card({ term }) {
  return (
    <div className="term" id="card-component">
      <h3>{term.name}</h3>
      <p>{term.description}</p>
    </div>
  );
}

export default Card;