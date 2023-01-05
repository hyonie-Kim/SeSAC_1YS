import { useState } from 'react';

function Ex1() {
  let [counter, setCounter] = useState(1);

  return (
    <div>
      <h1>실습, 카운터 만들기!</h1>
      <div>
        <span>{counter}</span>
      </div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Ex1;
