import React from 'react';

export default function Item({ item, price, index }) {
  return (
    <div key={index}>
      <h2>{item}</h2>
      <p>{price}</p>
    </div>
  );
}
