import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ConditionalRender2() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);

  const conditionalRender = condition ? 'True' : 'False';

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  return (
    <>
      <h1>조건부 렌더링</h1>
      <div>{conditionalRender}</div> <br />
      <button onClick={toggle}>Toggle-Button</button>
    </>
  );
}
