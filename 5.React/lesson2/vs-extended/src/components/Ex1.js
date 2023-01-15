import { useState } from 'react';

export default function Ex1() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>실습, 카운터 만들기!</h1>
      <div>
        <span>{count}</span>
      </div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
