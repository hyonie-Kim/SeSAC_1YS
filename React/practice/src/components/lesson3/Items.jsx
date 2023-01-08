import React from 'react';

export default function Items({ item, price, index }) {
  return (
    <div key={index}>
      <h3>{item}</h3>
      <p>{price}</p>
    </div>
  );
}
