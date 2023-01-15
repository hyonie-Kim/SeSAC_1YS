import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');
  const inputValue = useRef();

  function onChangeText() {
    // const inputText = e.target.value;
    console.log(inputValue);
    setText(inputValue.current.value);
  }
  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={() => {
          onChangeText();
        }}
      />
    </div>
  );
}
