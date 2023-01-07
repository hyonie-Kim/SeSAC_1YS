import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List({ title, content }) {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      <ListChild title={title} content={content} />
      {/* <ListChild title="코테 문제 풀기" content="Lv 0 정복 가즈아" /> */}
    </div>
  );
}
