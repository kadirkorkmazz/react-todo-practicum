import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { addDataToApi } from '../utils/apiQueries';
import { toast } from 'react-toastify';

function Todo({ todos, setTodos, user, setIsLogin }) {
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
      const addToast = toast.loading('Ekleniyor...');
      addDataToApi(data)
        .then((response) => {
          toast.update(addToast, {
            render: `${response.content} başarıyla eklendi.`,
            type: 'success',
            autoClose: 2000,
            isLoading: false,
          });
          setInputText('');
          data.id = response.id;
          setTodos([...todos, data]);
          e.target.firstChild.disabled = false;
          e.target.firstChild.focus();
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.update(addToast, {
            render: 'Todo eklenirken bir hata oluştu.',
            type: 'error',
            autoClose: 2000,
            isLoading: false,
          });
        });
    }
  };

  return (
    <div className='todo'>
      <h1>todos</h1>
      <div className='user'>
        <p>{user}</p>
        <button
          className='logout'
          onClick={() => {
            localStorage.clear();
            setIsLogin(false);
            toast.success('Logged out');
          }}
        >
          Logout
        </button>
      </div>

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
