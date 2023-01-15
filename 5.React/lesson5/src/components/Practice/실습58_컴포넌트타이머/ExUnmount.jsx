import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <PracticeTimer />}
      <button style={{ display: 'inline' }} onClick={() => setShow(!show)}>
        {show ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}
