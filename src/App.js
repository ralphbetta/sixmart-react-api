import React from 'react'
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pay attention to the arrangements
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

