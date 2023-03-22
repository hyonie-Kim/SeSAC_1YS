import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  //   const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토 이름을 작성해주세요.`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };
  return (
    <div>
      <h1>
        {person.name}이는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>

      <Button text={"멘토의 이름을 바꾸기"} onClick={handleUpdate} />
      <Button text={"멘토 추가하기"} onClick={handleAdd} />
      <Button text={"멘토 삭제하기"} onClick={handleDelete} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log("Button", text, "re-rendering 😜");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text}
    </button>
  );
}

const initialPerson = {
  name: "세현",
  title: "개발자",
  mentors: [
    { name: "규리", title: "시니어개발자" },
    { name: "소현", title: "시니어개발자" },
  ],
};
