import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  // weight는 리듀서를 통해서 index.js에서 들어온값
  return (
    <>
      <h1>당신의 몸무게는 {weight}kg 입니다.</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살찌기
      </button>{' '}
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살빼기
      </button>
    </>
  );
}
