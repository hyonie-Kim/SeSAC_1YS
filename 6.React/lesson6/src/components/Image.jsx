import React from 'react';
import seoul from '../seoul.jpg';

export default function Image() {
  return (
    <>
      <img src="/images/seoul.jpg" alt="서울" />
      <br />
      <img src={seoul} alt="서울" />
    </>
  );
}
