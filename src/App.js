import Todo from './components/Todo';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignIn';

function App() {
  const [todos, setTodos] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    let userName = localStorage.getItem('user');
    if (userName) {
      setUser(userName);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
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
      {!isLogin ? (
        <SignIn setIsLogin={setIsLogin} setUser={setUser} />
      ) : (
        <Todo
          todos={todos}
          setTodos={setTodos}
          user={user}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
}

export default App;
