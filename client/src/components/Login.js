import { React, useState } from 'react'
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

  const handleSubmit = (e) => {  //handle submission
    e.preventDefault();
    // navigate('/')
    // console.log(formState.username, formState.password)
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if(res.ok){
        res.json().then(obj => {
          navigate('/')
        })
      } else {
        res.json().then(data => console.log(data))
      }
    })
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