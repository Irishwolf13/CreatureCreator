import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

import DragDrop from './components/DragDrop';

function App() {
  return (
    <div className="App">
      <DndProvider backend={ HTML5Backend }>
        <Routes>
          <Route 
            path="/" 
            element={<DragDrop />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
