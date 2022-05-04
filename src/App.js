import React from 'react';
import Todolist from './components/TodoList';
import {  DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
      <Todolist />
      </div>
      </DndProvider>
   
  );
}

export default App;
