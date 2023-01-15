import React from 'react';
import { useState } from 'react';

export default function ChangeObjArr(props) {
  const [index, setIndex] = useState(0);
  const obj = props.objArr[index];
  function btn() {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <h1>이름: {obj.name}</h1>
      <h2>나이: {obj.age}</h2>
      <h2>별명: {obj.nickName}</h2>

      <button onClick={btn}>프로필 변경</button>
    </div>
  );
}
