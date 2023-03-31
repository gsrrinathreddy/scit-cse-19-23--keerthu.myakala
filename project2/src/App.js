import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="Aboutus" element={<Aboutus/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Skills" element={<Skills/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      <Route path="Experience" element={<Experience/>}/>
        
        </Routes>
    </div>
  );
}

export default App;
