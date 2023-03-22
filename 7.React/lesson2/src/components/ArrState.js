import React, { useState } from 'react';

export default function ArrState() {
  // 값이 0
  const [state, setState] = useState([0]);
  console.log(state);
  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
