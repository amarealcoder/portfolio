import React from 'react';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Articles />
      <Contact />
    </>
  );
}

export default App;
