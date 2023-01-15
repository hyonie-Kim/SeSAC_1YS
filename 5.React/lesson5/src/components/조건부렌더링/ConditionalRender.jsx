import React from 'react';
import { useState } from 'react';
import Item from './Item';

export default function ConditionalRender() {
  const [condition, setCondition] = useState('보여주기');
  const onChange = () => {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  };

  const conditionalRender = condition === '감추기' && <Item />;

  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
