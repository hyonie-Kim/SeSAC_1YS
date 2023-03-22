import React, { useState } from "react";

// 스프레드 연산자, 중첩 객체 상태 관리
const obj = {
  name: "세현",
  title: "개발자",
  mentor: {
    name: "엘리",
    title: "시니어개발자",
  },
};

const name = "업데이트 이름";
const update = {
  ...obj,
  mentor: { ...obj.mentor, name },
};

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "세현",
    title: "개발자",
    mentor: {
      name: "엘리",
      title: "시니어개발자",
    },
  });

  return (
    <div>
      <h1>
        {person.name}이는 {person.title}
      </h1>
      <p>
        {person.name}이의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
