import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SignIn({ setIsLogin, setUser }) {
  const [inputText, setInputText] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setUser(inputText);
    localStorage.setItem('user', inputText);
    toast.success('Logged in');
  };

  return (
    <div className='sign'>
      <h1>todos</h1>
      <form onSubmit={handleLogin}>
        <h4>Login</h4>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default SignIn;
