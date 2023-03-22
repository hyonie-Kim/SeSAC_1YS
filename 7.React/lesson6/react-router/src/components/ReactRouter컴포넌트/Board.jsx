import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Board() {
  return (
    <>
      <Header />
      <h1>게시판 페이지입니다.</h1>
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}
