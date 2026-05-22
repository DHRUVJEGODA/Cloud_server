import { useEffect } from 'react';
import './index.css';
import './sections.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const handlePageShow = (event) => {
      if (event.persisted) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default App;
