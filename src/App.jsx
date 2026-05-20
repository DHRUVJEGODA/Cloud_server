import React, { useState, useEffect } from 'react';
import './index.css';
import './sections.css';
import avatarImg from './assets/hero.png';

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
            <a href="#services" className="btn btn-primary"><span className="arrow-circle">↗</span>Get Started</a>
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
              <a href="#services" className="btn btn-primary"><span className="arrow-circle">↗</span>Get Started</a>
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

        {/* TESTIMONIALS SECTION (moved below About) */}
        <section id="testimonials" className="content-section testimonials-section">
          <div className="section-heading testimonials-heading">
            <p className="section-kicker">TESTIMONIALS</p>
            <h2>Client Feedback and <span>Reviews</span></h2>
          </div>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="testimonial-quote">“The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase.”</p>

              <div className="testimonial-rating">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-empty">★</span>
              </div>

              <div className="testimonial-person">
                <img src={avatarImg} alt="Suraj Mishra" className="testimonial-avatar-img" />
                <div className="testimonial-meta">
                  <strong>Suraj Mishra</strong>
                  <span>Chemistry student</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">“The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization.”</p>
              <div className="testimonial-rating">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-empty">★</span>
              </div>
              <div className="testimonial-person">
                <img src={avatarImg} alt="Suraj Mishra" className="testimonial-avatar-img" />
                <div className="testimonial-meta">
                  <strong>Suraj Mishra</strong>
                  <span>Chemistry student</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">“The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization.”</p>
              <div className="testimonial-rating">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-empty">★</span>
              </div>
              <div className="testimonial-person">
                <img src={avatarImg} alt="Suraj Mishra" className="testimonial-avatar-img" />
                <div className="testimonial-meta">
                  <strong>Suraj Mishra</strong>
                  <span>Chemistry student</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">“The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase.”</p>
              <div className="testimonial-rating">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-empty">★</span>
              </div>
              <div className="testimonial-person">
                <img src={avatarImg} alt="Suraj Mishra" className="testimonial-avatar-img" />
                <div className="testimonial-meta">
                  <strong>Suraj Mishra</strong>
                  <span>Chemistry student</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">“The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization.”</p>
              <div className="testimonial-rating">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-empty">★</span>
              </div>
              <div className="testimonial-person">
                <img src={avatarImg} alt="Suraj Mishra" className="testimonial-avatar-img" />
                <div className="testimonial-meta">
                  <strong>Suraj Mishra</strong>
                  <span>Chemistry student</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* PRICING SECTION (inserted below testimonials) */}
        <section id="pricing" className="content-section pricing-section">
          <div className="section-heading">
            <p className="section-kicker">PRICING PLANS</p>
            <h2>Choose a plan that fits your needs with scalable, secure, and<br/>high-performance <span className="text-blue">cloud solutions—no hidden costs.</span></h2>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-icon">▪</div>
              <p className="plan-name">Basic plan</p>
              <strong className="plan-price">$20<span className="per">/month</span></strong>
              <p className="plan-note">Billed annually.</p>

              <ul className="plan-features">
                <li>Access to all basic features</li>
                <li>Basic reporting and analytics</li>
                <li>Up to 10 individual users</li>
                <li>20GB individual data each user</li>
                <li>Basic chat and email support</li>
              </ul>

              <a href="#start" className="btn btn-primary pricing-cta"><span className="arrow-circle">↗</span>Get Started</a>
            </article>

            <article className="pricing-card">
              <div className="pricing-icon">▪</div>
              <p className="plan-name">Premium plan</p>
              <strong className="plan-price">$40<span className="per">/month</span></strong>
              <p className="plan-note">Billed annually.</p>

              <ul className="plan-features">
                <li>Access to all basic features</li>
                <li>Basic reporting and analytics</li>
                <li>Up to 10 individual users</li>
                <li>20GB individual data each user</li>
                <li>Basic chat and email support</li>
              </ul>

              <a href="#start" className="btn btn-primary pricing-cta"><span className="arrow-circle">↗</span>Get Started</a>
            </article>

            <article className="pricing-card">
              <div className="pricing-icon">▪</div>
              <p className="plan-name">Advance plan</p>
              <strong className="plan-price">$80<span className="per">/month</span></strong>
              <p className="plan-note">Billed annually.</p>

              <ul className="plan-features">
                <li>Access to all basic features</li>
                <li>Basic reporting and analytics</li>
                <li>Up to 10 individual users</li>
                <li>20GB individual data each user</li>
                <li>Basic chat and email support</li>
              </ul>

              <a href="#start" className="btn btn-primary pricing-cta"><span className="arrow-circle">↗</span>Get Started</a>
            </article>
          </div>
        </section>

        {/* CONTACT / GET IN TOUCH SECTION (added at bottom) */}
        <section id="contact" className="content-section contact-section">
          <div className="contact-inner">
            <div className="contact-heading">
              <h2><span className="text-white">Get</span> <span className="text-blue">in Touch</span></h2>
            </div>

            <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
              <div className="row two-col">
                <label>
                  <span className="label-text">First Name <span className="req">*</span></span>
                  <input type="text" placeholder="Enter name" readOnly aria-readonly="true" />
                </label>
                <label>
                  <span className="label-text">Last Name <span className="req">*</span></span>
                  <input type="text" placeholder="Enter name" readOnly aria-readonly="true" />
                </label>
              </div>

              <div className="row two-col">
                <label>
                  <span className="label-text">Email <span className="req">*</span></span>
                  <input type="email" placeholder="Enter email" readOnly aria-readonly="true" />
                </label>
                <label>
                  <span className="label-text">Mobile No. <span className="req">*</span></span>
                  <input type="tel" placeholder="Enter mobile no." readOnly aria-readonly="true" />
                </label>
              </div>

              <div className="row">
                <label>
                  <span className="label-text">Message <span className="req">*</span></span>
                  <textarea placeholder="Enter message" rows={6} readOnly aria-readonly="true"></textarea>
                </label>
              </div>

              <div className="row submit-row">
                <button type="submit" className="btn btn-primary pricing-cta" disabled aria-disabled="true" title="Form is static"><span className="arrow-circle">↗</span> Submit Now</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img src="/cloud_footer.png" alt="CloudServer logo" className="footer-logo" />
            <p className="footer-desc">We specialize in delivering secure, scalable, and high-performance cloud solutions tailored to modern business needs. From reliable hosting and data storage to advanced cybersecurity and DevOps, our services are designed to simplify operations and support long-term growth.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Service</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="contact-line">📞 +1 222-222-2222</p>
            <p className="contact-line">✉ cloudserver@gmail.com</p>
          </div>

          <div className="footer-col">
            <h4>Get Started</h4>
            <ul className="footer-links">
              <li><a href="#login">Login</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Talk to Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>Copyright & Terms © 2025 Cloudserver. All Rights Reserved.</p>
          </div>

          <div className="footer-bottom-center">
            <a href="#">Terms of Use</a>
            <span className="sep">|</span>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="footer-bottom-right">
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">t</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
