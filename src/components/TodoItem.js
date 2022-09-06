import React from 'react';
import { useState } from 'react';
import { deleteTodoFromApi, updateTodoFromApi } from '../utils/apiQueries';

function TodoItem({ content, isCompleted, id, todos, setTodos }) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  const handleComplete = () => {
    setIsTaskCompleted(!isTaskCompleted);
    let data = {
      content: content,
      isCompleted: !isTaskCompleted,
      id: id,
    };
    updateTodoFromApi(id, data);
  };

  const handleDelete = () => {
    let remainingTasks = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTasks);
    deleteTodoFromApi(id);
  };

  return (
    <li className={isTaskCompleted ? 'todoItem completed' : 'todoItem'}>
      <input
        id={id}
        className='toggle'
        type='checkbox'
        onChange={handleComplete}
        checked={isTaskCompleted ? true : false}
      ></input>
      <label>{content}</label>
      <button className='deleteTodo' onClick={handleDelete}></button>
    </li>
  );
}

export default TodoItem;
