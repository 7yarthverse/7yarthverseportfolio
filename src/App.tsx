import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;