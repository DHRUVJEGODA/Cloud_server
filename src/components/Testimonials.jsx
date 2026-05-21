import { useEffect, useRef, useState } from 'react';
import avatarImg from '../assets/hero.png';

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase."',
      rating: 4, name: 'Suraj Mishra', role: 'Chemistry student',
    },
    {
      quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization."',
      rating: 4, name: 'Suraj Mishra', role: 'Chemistry student',
    },
    {
      quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, making the transition seamless, efficient, and completely hassle-free for our entire organization."',
      rating: 4, name: 'Suraj Mishra', role: 'Chemistry student',
    },
    {
      quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays or technical issues, while providing continuous guidance and reliable support throughout the entire setup phase."',
      rating: 4, name: 'Suraj Mishra', role: 'Chemistry student',
    },
    {
      quote: '"Fast, reliable, and the team is very supportive — helped us scale without downtime."',
      rating: 5, name: 'Anita Roy', role: 'Product Manager',
    },
    {
      quote: '"Excellent performance and monitoring — our incidents reduced drastically."',
      rating: 5, name: 'Rahul Verma', role: 'Ops Lead',
    },
    {
      quote: '"Great onboarding and continuous support — highly recommend their services."',
      rating: 4, name: 'Priya Singh', role: 'CTO',
    },
    {
      quote: '"Smooth migrations and excellent uptime. Support team is responsive and skilled."',
      rating: 5, name: 'Karan Patel', role: 'Engineering Manager',
    },
    {
      quote: '"Affordable plans with enterprise-level features — perfect for growing startups."',
      rating: 4, name: 'Meera Iyer', role: 'Founder',
    },
    {
      quote: '"The onboarding process was smooth, and their team ensured everything was set up perfectly from day one, allowing us to start operations quickly without any delays."',
      rating: 4, name: 'Suraj Mishra', role: 'Chemistry student',
    },
    {
      quote: '"Highly skilled team, helped us build a robust CI/CD pipeline and improved deployment frequency."',
      rating: 5, name: 'Anmol Gupta', role: 'DevOps Engineer',
    },
    {
      quote: '"Their security audits prevented serious vulnerabilities — excellent expertise and process."',
      rating: 5, name: 'Sana Khan', role: 'Security Analyst',
    },
  ];

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

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    const iv = setInterval(() => {
      setCurrentTestimonial((s) => (s >= maxIndex ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(iv);
  }, [testimonials.length, visibleCount]);

  useEffect(() => {
    if (!viewportRef.current || !trackRef.current) return;
    const card = trackRef.current.children[currentTestimonial];
    if (!card) return;
    viewportRef.current.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
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
            {testimonials.map((t, idx) => (
              <article className="testimonial-card" key={idx}>
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
