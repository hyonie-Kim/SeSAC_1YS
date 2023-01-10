import React from 'react';

export default function Ex2() {
  const name = '로이';
  const animal = '고양이';
  return (
    <div>
      <h2>
        제 반려 동물의 이름은{' '}
        <span style={{ textDecoration: 'underline' }}>{name}</span>입니다.
        <span style={{ textDecoration: 'underline' }}>{name}</span>는{' '}
        <span style={{ textDecoration: 'underline' }}>{animal}</span>
        입니다.
      </h2>
    </div>
  );
}
