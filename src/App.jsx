import React, { useState, useEffect } from 'react';
import './index.css';
import './sections.css';

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
      }, 300);

    }, 2000);

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

  const services = [
    { icon: "fa-cloud", title: "Cloud Hosting", desc: "High-performance hosting solutions ensuring fast loading, maximum uptime, and seamless user experience for your applications." },
    { icon: "fa-server", title: "Cloud Storage", desc: "Secure and scalable storage systems to store, manage, and access your data efficiently from anywhere anytime with advanced encryption and reliability." },
    { icon: "fa-shield-halved", title: "Cyber Security", desc: "Advanced security solutions protecting your systems, networks, and sensitive data from modern cyber threats and advanced attacks." },
    { icon: "fa-gears", title: "DevOps Solutions", desc: "Automate development workflows with efficient CI/CD pipelines, faster deployments, and improved collaboration across teams and environments." },
    { icon: "fa-chart-line", title: "Performance Monitoring", desc: "Real-time monitoring tools to track system performance, detect issues early, and ensure smooth and uninterrupted operations." },
    { icon: "fa-users-gear", title: "Scalability & Support", desc: "Flexible infrastructure and expert support services that adapt to your business growth and evolving technical requirements." }
  ];

  return (
    <>
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

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
            <a href="#services" className="btn btn-primary"><span className="arrow-circle">↗</span> Get Started</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          className="hero"
          id="hero"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-content">
            <h1>Enhance Your Cloud<br />Infrastructure for<br />Greater <span className={`animated-text ${fadeClass}`}>{words[currentIndex]}</span></h1>
            <p>Streamline your operations with secure cloud hosting, scalable infrastructure, advanced monitoring tools, and reliable support designed to help your business grow faster.</p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-outline-white">Learn More</a>
              <a href="#services" className="btn btn-primary"><span className="arrow-circle">↗</span> Get Started</a>
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
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="services-section">
          <div className="section-header center">
            <div className="section-subtitle">
              <span className="line"></span>
              <h5>SERVICES</h5>
              <span className="line"></span>
            </div>
            <h2>Provide Reliable Solutions to Simplify and Strengthen<br />Your <span className="text-blue">Cloud Operations</span></h2>
          </div>

          <div className="services-grid">
            {services.map((srv, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={`fa-solid ${srv.icon}`}></i>
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section id="about" className="about-section">
          <div className="about-images">
            <div className="img-collage" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/about_collage.png" alt="Cloud Technology Collage" className="float-anim" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(37, 99, 235, 0.2)' }} />
            </div>
          </div>
          <div className="about-content">
            <div className="section-subtitle">
              <h5>ABOUT US</h5>
              <span className="line"></span>
            </div>
            <h2>Empowering Businesses with Smart and Scalable <span className="text-blue">Cloud Solutions</span></h2>
            <p>We are a forward-thinking cloud solutions provider dedicated to helping businesses grow through secure, scalable, and high-performance technologies. From cloud hosting and storage to DevOps and cybersecurity, we deliver end-to-end solutions tailored to your needs. Our focus is on reliability, innovation, and long-term success—ensuring your digital infrastructure is always optimized, protected, and ready for the future.</p>
            <a href="#services" className="btn btn-outline-white about-btn">Learn More</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
