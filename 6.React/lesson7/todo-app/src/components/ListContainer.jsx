import React from 'react';
import DoneList from './DoneList';
import TodoList from './TodoList';

export default function ListContainer() {
  return (
    <>
      <TodoList />
      <DoneList />
    </>
  );
}
