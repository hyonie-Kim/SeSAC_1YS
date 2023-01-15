import React from 'react';

export default function CustomList(props) {
  return (
    <ul>
      {props.arr?.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}
