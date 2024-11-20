import React from 'react';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </Router>
);

export default App
