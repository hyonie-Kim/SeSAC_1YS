/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ListChild from './ListChild';

export default function () {
  const dataArr = [
    {
      title: '리액트 공부하기',
      content: 'state 사용법 익히기',
    },
    {
      title: '리액트 Map 공부하기',
      content: 'Map 사용법 익히기',
    },
  ];
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return <ListChild title={el.title} content={el.content} key={index} />;
      })}
    </div>
  );
}
