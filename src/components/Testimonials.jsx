import { useEffect, useRef, useState } from 'react';
import avatarImg from '../assets/hero.png';

const TESTIMONIALS_DATA = [
  {
    id: 't1',
    quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues."',
    rating: 5, 
    name: 'Suraj Mishra', 
    role: 'DevOps Lead',
  },
  {
    id: 't2',
    quote: '"Fast, reliable, and the team is very supportive — helped us scale our cloud architecture without a single minute of downtime during migration."',
    rating: 5, 
    name: 'Anita Roy', 
    role: 'Product Manager',
  },
  {
    id: 't3',
    quote: '"Excellent performance and monitoring metrics — our system incidents reduced drastically within the first week of deployment."',
    rating: 5, 
    name: 'Rahul Verma', 
    role: 'Infrastructure Architect',
  },
  {
    id: 't4',
    quote: '"Great onboarding experience and continuous security updates. I highly recommend their enterprise services for growing tech platforms."',
    rating: 4, 
    name: 'Priya Singh', 
    role: 'CTO',
  },
  {
    id: 't5',
    quote: '"Smooth migrations and excellent container engine performance. Their support team is highly responsive, deeply skilled, and available 24/7."',
    rating: 5, 
    name: 'Karan Patel', 
    role: 'Engineering Manager',
  },
  {
    id: 't6',
    quote: '"Affordable tiers with enterprise-level capabilities — absolutely ideal for fast-growing startups needing high security buffers."',
    rating: 4, 
    name: 'Meera Iyer', 
    role: 'Founder',
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1400) return 5;
      if (window.innerWidth >= 1000) return 3;
    }
    return 1;
  });

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1400) setVisibleCount(5);
      else if (window.innerWidth >= 1000) setVisibleCount(3);
      else setVisibleCount(1);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Sliding Interval logic
  useEffect(() => {
    const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - visibleCount);
    const iv = setInterval(() => {
      setCurrentTestimonial((s) => (s >= maxIndex ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(iv);
  }, [visibleCount]);

  // FIXED SCROLL LOGIC: Bounding calculation by card slide width
  useEffect(() => {
    if (!viewportRef.current || !trackRef.current) return;
    
    const card = trackRef.current.children[currentTestimonial];
    if (!card) return;

    // Calculate exact scrolling position within the container coordinate plane
    // const containerPadding = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0;
    const targetScrollLeft = card.offsetLeft - trackRef.current.offsetLeft;

    viewportRef.current.scrollTo({ 
      left: targetScrollLeft, 
      behavior: 'smooth' 
    });
  }, [currentTestimonial]);

  return (
    <section id="testimonials" className="content-section testimonials-section">
      <div className="section-heading testimonials-heading">
        <p className="section-kicker">TESTIMONIALS</p>
        <h2>Client Feedback and <span>Reviews</span></h2>
      </div>

      <div className="testimonials-slider-wrapper">
        <div className="testimonials-viewport" ref={viewportRef}>
          <div className="testimonials-track" ref={trackRef}>
            {TESTIMONIALS_DATA.map((t) => (
              <article className="testimonial-card" key={t.id}>
                <p className="testimonial-quote">{t.quote}</p>

                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`star ${i < t.rating ? 'star-filled' : 'star-empty'}`}>★</span>
                  ))}
                </div>

                <div className="testimonial-person">
                  <img src={avatarImg} alt={t.name} className="testimonial-avatar-img" />
                  <div className="testimonial-meta">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}