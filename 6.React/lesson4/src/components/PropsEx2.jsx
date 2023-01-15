import React from 'react';
import Book from './Book';

export default function PropsEx2() {
  const book = {
    title: '나의 하루는 4시 40분에 시작된다',
    writer: '김유진',
    price: '13,500',
    division: '자기계발서',
  };
  return (
    <div style={{ background: '#F5F5DC', padding: '15px' }}>
      <h1 style={{ color: '#FE8050' }}>이번주 베스트 셀러</h1>
      <Book bookObj={book} />
    </div>
  );
}
