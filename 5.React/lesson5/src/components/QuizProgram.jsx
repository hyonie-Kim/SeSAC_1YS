import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function QuizProgram() {
  const [numberEl, setNumberEl] = useState(newRandomNumberOne);
  const [numberE2, setNumberE2] = useState(newRandomNumberTwo);
  const [inputEl, setInputEl] = useState(0);

  const number = useRef();

  function newRandomNumberOne() {
    return Math.floor(Math.random() * 9 + 1);
  }
  function newRandomNumberTwo() {
    return Math.floor(Math.random() * 9 + 1);
  }

  function ChangeNumber() {
    const result = numberEl * numberE2;
    console.log(result);
  }
  return (
    <div>
      <h1>{numberEl}</h1>
      <h1>{numberE2}</h1>
      <input
        type="text"
        onChange={(e) => {
          setInputEl(e.target.value);
        }}
      />
      <button>정답 제출!</button>
    </div>
  );
}
