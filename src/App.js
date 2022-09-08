import Todo from './components/Todo';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer autoClose={2000} newestOnTop={true} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
