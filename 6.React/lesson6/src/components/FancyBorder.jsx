import React from 'react';

export default function FancyBorder(props) {
  return (
    <div style={{ border: `3px solid ${props.color}` }}>{props.children}</div>
  );
}
