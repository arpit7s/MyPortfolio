import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyLatestWork from './components/MyProject/MyLatestWork';
import Services from './components/MyServices/Services';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="content">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <MyLatestWork />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
