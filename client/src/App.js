import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

import DragDrop from './components/DragDrop';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <DndProvider backend={ HTML5Backend }>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
