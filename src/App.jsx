import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const words = ["Security", "Growth", "Performance"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeClass('fade-in');
      }, 500); // match CSS fade-out transition
      
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
      {/* Background Elements */}
      <div className="background-grid"></div>
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

      {/* Navigation Bar */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <span className="logo-cloud">Cloud</span><span className="logo-server">Server</span>
          </div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <a href="#login" className="btn btn-outline">Login</a>
            <a href="#start" className="btn btn-primary">Get Started <span className="arrow">↗</span></a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main 
        className="hero" 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-content">
          <h1>Enhance Your Cloud<br />Infrastructure for<br />Greater <span className={`animated-text ${fadeClass}`}>{words[currentIndex]}</span></h1>
          <p>Streamline your operations with secure cloud hosting, scalable infrastructure, advanced monitoring tools, and reliable support designed to help your business grow faster.</p>
          <div className="hero-buttons">
            <a href="#learn" className="btn btn-outline-white">Learn More</a>
            <a href="#start" className="btn btn-primary">Get Started <span className="arrow">↗</span></a>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/cloud_illustration.png" 
            alt="Isometric Cloud Server Illustration" 
            className="floating-img" 
            id="hero-illustration"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: mousePos.x === 0 && mousePos.y === 0 ? 'transform 0.3s ease' : 'none'
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;
