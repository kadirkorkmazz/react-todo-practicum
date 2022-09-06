import Todo from './components/Todo';
import './styles/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_KEY)
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
