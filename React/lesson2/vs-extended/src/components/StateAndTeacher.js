import React, { useState } from 'react';

export default function StateAndTeacher() {
  let [teacher, setTeacher] = useState('이효석');

  function customSetTeacher(name) {
    setTeacher(name);
    // teacher = name;
    console.log(teacher);
  }

  // let teacher = '이효석';

  function inEnglish() {
    // JS식 버튼 클릭 효과
    const spanEl = document.querySelector('.App > span');
    spanEl.innerHTML = 'tetz';

    // teacher = 'tetz';
    // console.log(teacher);
  }
  return (
    <div>
      <button onClick={() => customSetTeacher('tetz')}>영어로</button>
      <br />
      <span>{teacher}</span>
    </div>
  );
}
