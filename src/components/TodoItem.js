import { useState } from 'react';
import { deleteTodoFromApi, updateTodoFromApi } from '../utils/apiQueries';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

function TodoItem({ content, isCompleted, id, todos, setTodos }) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(content);

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

  const handleEdit = () => {
    setIsEditing(!isEditing);

    if (isEditing) {
      if (editingText.length > 2 && content !== editingText) {
        let data = {
          content: editingText,
          isCompleted: isCompleted,
          id: id,
        };

        let updatedTasks = todos.map((todo) => {
          if (todo.id === data.id) {
            return { ...todo, content: editingText };
          }
          return todo;
        });

        setTodos(updatedTasks);
        updateTodoFromApi(id, data);
      } else {
        setEditingText(content);
      }
    }
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
      <div className='inputItem'>
        {isEditing ? (
          <input
            className='editInput'
            type='text'
            onChange={(e) => setEditingText(e.target.value)}
            value={editingText}
          ></input>
        ) : (
          <label>{editingText}</label>
        )}
      </div>
      <div className='todoFunc'>
        <button onClick={handleEdit}>
          <FiEdit />
        </button>
        <button onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
