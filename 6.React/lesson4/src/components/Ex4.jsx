import React from 'react';
import { useState } from 'react';

export default function Ex4() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  function result() {
    return (
      a != '' &&
      b != '' &&
      (a <= b ? (
        a == b ? (
          <p>a와 b는 같습니다.</p>
        ) : (
          <p>"b가 a보다 더 큽니다."</p>
        )
      ) : (
        <p>"a가 b보다 더 큽니다."</p>
      ))
    );
  }
  return (
    <div>
      <div>
        a =
        <input
          value={a}
          onChange={(e) => {
            setA(e.target.value);
            console.log('a값', e.target.value);
          }}
        />
      </div>
      <div>
        b =
        <input
          value={b}
          onChange={(e) => {
            setB(e.target.value);
            console.log('b값', e.target.value);
          }}
        />
      </div>
      <div>{result()}</div>
    </div>
  );
}
