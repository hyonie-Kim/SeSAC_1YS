import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const userInput = useRef();
  const divEl = useRef();
  const changeColor = () => {
    const Color = userInput.current.value;
    divEl.current.style.background = Color;
  };

  return (
    <div ref={divEl}>
      <input ref={userInput} />
      <br />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
