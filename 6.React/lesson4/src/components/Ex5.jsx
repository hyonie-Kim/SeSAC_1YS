import React from 'react';

export default function Ex5() {
  const title = 'Hello World';
  return (
    <div>
      <div className="test">{title}</div> <br />
      아이디 : <input type="text" className="inputClass" /> <br />
      비밀번호 : <input type="text" className="inputClass" />
    </div>
  );
}
