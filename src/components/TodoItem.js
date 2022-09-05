import React from 'react';

function TodoItem() {
  return (
    <div className='todoItem'>
      <input id={Math.random()} className='toggle' type='checkbox'></input>
      <label>Learn JavaScript</label>
      <button className='deleteTodo'></button>
    </div>
  );
}

export default TodoItem;
