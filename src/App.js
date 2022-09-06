import Todo from './components/Todo';
import './styles/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch('https://63148a4cfa82b738f7497d23.mockapi.io/todos')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
