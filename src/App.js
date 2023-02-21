import React from 'react'
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pay attention to the arrangements
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />
      </Routes>
    </Router>
  );
}

export default App;

