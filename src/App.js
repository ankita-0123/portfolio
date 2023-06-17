import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Skills from './pages/skills/Skills';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import './App.scss';
const App = () => {
  const location = useLocation();
  console.log(location);
  const handleInit = async(main)=>{
    await loadFull(main)
  }
  const renderParticleJsInHomePage = location.pathname===("/");
  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (<Particles id="particles" options={particles} init={handleInit} />)}
      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </div>
    </div>
  );
};

export default App;

