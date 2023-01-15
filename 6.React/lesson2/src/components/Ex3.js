import React, { useState } from 'react';

export default function Ex3() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>실습연습</h3>
      <span onClick={() => setCount(count + 1)}>
        {count <= 5 ? '👍' : '😊'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
