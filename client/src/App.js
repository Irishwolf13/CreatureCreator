import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import { React, useEffect, useState } from "react";

// import DragDrop from './components/DragDrop';
import './App.css'
import HomePage from './components/HomePage';
import CreateMonster from './components/CreateMonster';
import ChooseMonster from './components/ChooseMonster';
import Login from './components/Login';
import ShowMonsters from './components/ShowMonsters';
import Signup from './components/Signup';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok) {
        res.json().then(data => console.log(data))
      } else {
        setUser(null)
      }
    })
  },[])

  const updateUser = (user) => setUser(user)
  console.log('My user is:')
  console.log(user)
  return (
    <div className="App">
      <DndProvider backend={ HTML5Backend }>
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
            element={<ChooseMonster />}
          />
          <Route
            path="/show/monsters/"
            element={<ShowMonsters />}
          />
          <Route
            path="/create/monster/"
            element={<CreateMonster />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
