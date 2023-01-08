import React from 'react';
import LisatChild from './LisatChild';

export default function () {
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      <LisatChild title="리액트 공부하기" content="state 사용법 익히기" />
      <LisatChild title="코테 문제 풀기" content="Lv 0 정복 가즈아" />
    </div>
  );
}
