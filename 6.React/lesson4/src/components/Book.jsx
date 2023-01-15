import React from 'react';
import bookImg from '../bookImg.jpg';

export default function Book(props) {
  const { title, writer, price, division } = props.bookObj;
  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <img
        src={bookImg}
        alt="Book"
        style={{ width: '180px', marginTop: '5px' }}
      />

      <h2>{title}</h2>
      <div
        style={{ textAlign: 'start', padding: '0 25px', lineHeight: '15px' }}
      >
        <h3>저자: {writer}</h3>
        <h3>판매가: {price}</h3>
        <h3>구분: {division}</h3>
      </div>
    </div>
  );
}
