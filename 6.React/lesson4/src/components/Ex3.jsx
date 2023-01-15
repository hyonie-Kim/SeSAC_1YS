import React, { useState } from 'react';

export default function Ex3() {
  const [add, setAdd] = useState(0);

  function result(e) {
    if (e.target.value == '') setAdd('');
    else e.target.value == '8' ? setAdd('정답입니다') : setAdd('오답입니다.');
  }

  return (
    <div>
      <h1>3+5= </h1>
      <input type="text" onChange={result} />
      <div>{add}</div>
    </div>
  );
}
