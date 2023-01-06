import React, { useState } from 'react';

export default function StrState() {
  const [strState, setStrState] = useState('init');
  return (
    <div>
      <button onClick={() => setStrState(strState + '+')}>반복!</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
