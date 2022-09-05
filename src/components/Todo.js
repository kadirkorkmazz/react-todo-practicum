import React from 'react';
import TodoItem from './TodoItem';

function Todo() {
  return (
    <div className='todo'>
      <h1>todos</h1>
      <form className='todoForm'>
        <input placeholder='add todo'></input>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </form>
    </div>
  );
}

export default Todo;
