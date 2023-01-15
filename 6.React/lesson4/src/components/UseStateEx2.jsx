import React from 'react';
import { useState } from 'react';

export default function UseStateEx2() {
  const [counst, setCount] = useState(0);
  function Increase() {
    setCount(counst + 1);
  }
  function Decrease() {
    setCount(counst - 2);
  }
  return (
    <div>
      <h1>함수형 컴포넌트 Count</h1>
      <h2>{counst}</h2>
      <button onClick={Increase}>+1</button>{' '}
      <button onClick={Decrease}>-2</button>
    </div>
  );
}
