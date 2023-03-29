import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TotoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "공부하기", status: "active" },
    { id: "124", text: "장보기", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={todos.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo />
    </section>
  );
}
