import React from 'react';
import { Link, Routes } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">홈 페이지 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
