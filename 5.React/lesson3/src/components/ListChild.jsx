import React from 'react';

export default function ListChild(props) {
  const { title, content } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <hr></hr>
    </div>
  );
}
