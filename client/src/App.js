import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import { React, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// import DragDrop from './components/DragDrop';
import './App.css'
import HomePage from './components/HomePage';
import CreateMonster from './components/CreateMonster';
import ChooseMonster from './components/ChooseMonster';
import Login from './components/Login';
import ShowMonsters from './components/ShowMonsters';
import Signup from './components/Signup';

function App() {
  //allow navigation
  const navigate = useNavigate();
  const [user, setUser] = useState({user_id: 0})
  const [monsterState, setMonsterState] = useState(
    { monster_name: 'Frank',
      look_id: 1,
      user_id : 1,
      armor_id: 1,
      weapon_id: 1,
      level: 1,
      hit_points: 1,
      base_armor: 1,
      attack: 1,
      magic: 1,
      movement: 1,
      bio: ''
    });
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok) {
        // res.json().then(data => console.log(data))
      } else {
        setUser(null)
      }
    })
    fetch('http://localhost:3000/looks')
      .then(response => response.json())
      .then(data => setMonsters(data));
  },[])

  //handles logout clicked
  const handleLogOut = () => {
    //console.log(user)
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        //console.log(user)
        alert('Logged out')
        navigate('/')
      } else {
        //console.log('else: ')
        //console.log(user)
        //handle errors
      }
    })
  }

  // const updateUser = (user) => setUser(user)
  // console.log('My user is:')
  // console.log(user)
  return (
    <div className="App">
      <DndProvider backend={ HTML5Backend }>
        <button onClick={handleLogOut}>LogOut</button>
        <Routes>
          <Route
            path="/"
            element={<HomePage user={user}/>}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser}/>}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/choose/monster"
            element={<ChooseMonster 
              user={user} 
              monsterState={monsterState} 
              setMonsterState={setMonsterState}
              monsters={monsters}
              />}
          />
          <Route
            path="/show/monsters/"
            element={<ShowMonsters />}
          />
          <Route
            path="/create/monster/"
            element={<CreateMonster 
              user={user} 
              monsterState={monsterState} 
              setMonsterState={setMonsterState}
              monsters={monsters}
              />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
