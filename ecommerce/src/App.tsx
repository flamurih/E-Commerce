import React from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import Posts from './components/posts/Posts';


function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Posts />
    </>
  );
}

export default App;
