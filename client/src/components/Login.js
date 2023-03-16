import { React, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate(); //allow navigation

  const initialState = { // Creates the initial state of blank
    username: '',
    password: ''
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => { // Handle user Input
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => { // Handle when user submits form
    e.preventDefault();
    setFormState(initialState)
    navigate('/')
  }

  return (
    <>
      <div>Login</div>
      <div id="login-form">
        <form className="form" onSubmit={handleSubmit}>
            <input name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>
            <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;