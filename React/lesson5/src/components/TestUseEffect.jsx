import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const inputValue = useRef();

  function onButtonClick() {
    console.log('λ²νΌ ν΄λ¦­π±οΈ');
    setCount(count + 1);
  }

  const onInputChange = () => {
    console.log('β¨οΈν€ μλ ₯');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('πΌοΈ λ λλ§ λ  λλ§λ€ μ€ν');
  });

  useEffect(() => {
    console.log('π¨λ§μ΄νΈ λ  λλ§ μ€ν');
  }, []);
  useEffect(() => {
    console.log('πλ²νΌμ΄ ν΄λ¦­λ  λλ§ μ€ν');
  }, [count, text]);

  //   useEffect(() => {
  //     console.log('π©βπ»ν€ μλ ₯ μμλ§ μ€ν');
  //   }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 λ²νΌ</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </div>
  );
}
