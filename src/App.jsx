import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="bg-[#212428] text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;