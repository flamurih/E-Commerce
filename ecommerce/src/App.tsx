import React from 'react';
import './App.css';
import Home from './home';
import Login from './components/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Home />}></Route>
            <Route path='Login' element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
