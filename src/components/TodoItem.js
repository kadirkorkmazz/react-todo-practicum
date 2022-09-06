import React from 'react';
import { useState } from 'react';

function TodoItem({ content, isCompleted, id, todos, setTodos }) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  const handleComplete = () => {
    setIsTaskCompleted(!isTaskCompleted);
  };

  const handleDelete = () => {
    let remainingTasks = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTasks);
  };

  return (
    <li className={isTaskCompleted ? 'todoItem completed' : 'todoItem'}>
      <input
        id={id}
        className='toggle'
        type='checkbox'
        onChange={handleComplete}
      ></input>
      <label>{content}</label>
      <button className='deleteTodo' onClick={handleDelete}></button>
    </li>
  );
}

export default TodoItem;
