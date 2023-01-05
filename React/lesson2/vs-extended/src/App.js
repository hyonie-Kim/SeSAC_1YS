import React, { useState } from 'react';
import Ex1 from './components/Ex1';
import './App.css';

function App() {
  let [teacher, setTeacher] = useState('이효석');

  function customSetTeacher(name) {
    setTeacher(name);
    // teacher = name;
    console.log(teacher);
  }

  // let teacher = '이효석';

  function inEnglish() {
    const spanEl = document.querySelector('.App > span');
    spanEl.innerHTML = 'tetz';

    // teacher = 'tetz';
    // console.log(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => customSetTeacher('tetz')}>영어로</button>
      <br />
      <span>{teacher}</span>
      <Ex1 />
    </div>
  );
}

export default App;
