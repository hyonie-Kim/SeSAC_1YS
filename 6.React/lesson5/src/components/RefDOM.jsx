import React from 'react';
import { useRef } from 'react';

export default function RefDOM() {
  const orangeEl = useRef();
  const skyBlueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    skyBlueEl.current.style.backgroundColor = 'skyblue';
  };
  const clearInput = () => {
    inputEl.current.value = '';
  };
  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={skyBlueEl}>SkyBlue</h1>
      <input ref={inputEl} />
      <br />
      <br />
      <button onClick={adjustCSS}>CSS 적용하기</button>
      <button onClick={clearInput}>인풋 초기화</button>
    </div>
  );
}
