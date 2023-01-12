import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>타이머가 실행중 입니다⏰</h1>
    </div>
  );
}
