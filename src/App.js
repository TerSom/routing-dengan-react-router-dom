import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState } from "react";
import './App.css';
import Home from "./Pages/Home";
import About from './Pages/About';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}



export default App;
