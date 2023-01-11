import React, { useRef } from 'react';
import { useState } from 'react';

export default function EventEx() {
  const [info, setInfo] = useState([
    { name: '세현', email: 'hyeoni@gmail.com' },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInfo(info.concat({ name: name, email: email }));
          setName('');
          setEmail('');
        }}
      >
        등록
      </button>
      {info.map((e, index) => (
        <h2 key={index}>
          {' '}
          {e.name}:{e.email}
        </h2>
      ))}
    </div>
  );
}
