import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

import DragDrop from './components/DragDrop';
import HomePage from './components/HomePage';
import CreateMonster from './components/CreateMonster';
import Login from './components/Login';
import ShowMonsters from './components/ShowMonsters';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <DndProvider backend={ HTML5Backend }>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/create/monster"
            element={<CreateMonster />}
          />
          <Route
            path="/show/monsters/"
            element={<ShowMonsters />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
