import React, { useState } from 'react';

export default function Condition() {
  const [condition, SetCondition] = useState(true);

  return (
    <div>
      <button onClick={() => SetCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
