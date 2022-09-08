import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { addDataToApi } from '../utils/apiQueries';

function Todo({ todos, setTodos }) {
  const [inputText, setInputText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    let data = {
      content: inputText,
      isCompleted: false,
    };

    if (inputText.length > 2) {
      setInputText('Loading...');
      e.target.firstChild.disabled = true;
      addDataToApi(data).then((response) => {
        console.log('Success: ', response);
        setInputText('');
        data.id = response.id;
        setTodos([...todos, data]);
        e.target.firstChild.disabled = false;
        e.target.firstChild.focus();
      });
    }
  };

  return (
    <div className='todo'>
      <h1>todos</h1>
      <form onSubmit={addTask}>
        <input
          placeholder='What needs to be done?'
          value={inputText}
          onChange={(e) => {
            e.preventDefault();
            setInputText(e.target.value);
          }}
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
