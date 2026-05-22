import { useState, useEffect, useRef } from 'react';
import HeroIllustration from '../HeroIllustration';

const words = ["Performance", "Security", "Growth"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordClass, setWordClass] = useState('scroll-in');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordClass('scroll-out');
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setWordClass('scroll-in');
      }, 240);
    }, 1800);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Enhance Your Cloud<br />Infrastructure for<br />
          Greater <span className={`animated-text ${wordClass}`}>{words[currentIndex]}</span>
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
            width: '100%',
            maxWidth: '513.32px',
            height: '100%'
          }}
        />
      </div>
    </section>
  );
}
