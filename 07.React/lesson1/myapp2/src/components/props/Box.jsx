import React from 'react';
// import './App.css';

export default function Box(props) {
  console.log('props:', props);
  return (
    <div style={{ border: '1px solid green', width: '100px', height: '100px' }}>
      box{props.num}
      <p>{props.name}</p>
    </div>
  );
}
