import React from 'react';
import bookImg from '../bookImg.jpg';

export default function Book(props) {
  const { title, writer, price, division } = props.bookObj;
  return (
    <div>
      <img src={bookImg} alt="Book" style={{ width: '200px' }} />
      <div
        style={{
          padding: '0px',
          // textAlign: 'left',
          width: '80%',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <h2>{title}</h2>
        <div>
          <h3>저자: {writer}</h3>
          <h3>판매가: {price}</h3>
          <h3>구분: {division}</h3>
        </div>
      </div>
    </div>
  );
}
