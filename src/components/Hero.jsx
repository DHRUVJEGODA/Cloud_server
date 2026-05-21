import { useState, useEffect } from 'react';
import HeroIllustration from '../HeroIllustration';

const words = ["Security", "Growth", "Performance"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setFadeClass('fade-in');
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Enhance Your Cloud<br />Infrastructure for<br />
          Greater <span className={`animated-text ${fadeClass}`}>{words[currentIndex]}</span>
        </h1>
        <p>
          Streamline your operations with secure cloud hosting, scalable infrastructure,
          advanced monitoring tools, and reliable support designed to help your
          business grow faster.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-outline-white">Learn More</a>
          <button type="button" className="btn btn-primary" aria-label="Get Started">
            <span className="arrow-circle">↗</span>Get Started
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <HeroIllustration
          style={{
            width: '560px',
            maxWidth: '100%',
            height: '480px'
          }}
        />
      </div>
    </section>
  );
}
