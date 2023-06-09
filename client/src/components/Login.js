import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ setUser, monsterState, setMonsterState }) {
  //allow navigation
  const navigate = useNavigate();

  // Creates the initial state of blank
  const initialState = {
    username: '',
    password: ''
  };
  const [formState, setFormState] = useState(initialState);

  // Handle user Input
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  //handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if(res.ok){
        res.json().then(obj => {
          console.log('Change User')
          setUser(obj)
          setMonsterState(prevState => ({ ...prevState, user_id: obj.id }))
          console.log('Change monsterState')
          navigate('/choose/monster')
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