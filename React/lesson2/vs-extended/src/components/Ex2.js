import React, { useState } from 'react';

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>실습, 좋아요 버튼 만들기!</h3>
      <div>
        <span onClick={() => setCount(count + 1)}>
          {count <= 10 ? '👍' : '😎'}
        </span>
        <br />
        <span>{count}</span>
      </div>
    </div>
  );
}
