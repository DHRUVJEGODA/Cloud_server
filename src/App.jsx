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
  return (
    <>
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

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
