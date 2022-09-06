import React, { useState } from 'react';
import TodoItem from './TodoItem';

function Todo({ todos, setTodos }) {
  const [inputText, setInputText] = useState('');

  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText.length > 2) {
      setTodos([
        ...todos,
        {
          content: inputText,
          isCompleted: false,
          id: Math.round(Math.random() * 10000),
        },
      ]);
      setInputText('');
    }
  };

  return (
    <div className='todo'>
      <h1>todos</h1>
      <form onSubmit={addTask}>
        <input
          placeholder='add todo'
          value={inputText}
          onChange={inputTextHandler}
        ></input>
      </form>
      <ul className='todoList'>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
              id={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>
    </div>
  );
}

export default Todo;
