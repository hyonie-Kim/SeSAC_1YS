import React from 'react';
import { useState } from 'react';
import PracticeTwo from './PracticeTwo';
import PracticeOne from './PracticeOne';

export default function ExConditional() {
  const [condition, setCondition] = useState('1번');

  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };
  return (
    <div>
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}
