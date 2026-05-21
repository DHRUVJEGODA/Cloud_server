export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-images">
        <div className="img-collage" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/about_collage.png"
            alt="Cloud Technology Collage"
            className="float-anim"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '14px',
              boxShadow: '0 20px 48px rgba(0,0,0,0.65), 0 0 28px rgba(37, 99, 235, 0.18)',
              position: 'relative'
            }}
          />
        </div>
      </div>

      <div className="about-content">
        <div className="section-subtitle">
          <h5>ABOUT US</h5>
          <span className="line"></span>
        </div>
        <h2>
          Empowering Businesses with Smart and Scalable{' '}
          <span className="text-blue">Cloud Solutions</span>
        </h2>
        <p>
          We are a forward-thinking cloud solutions provider dedicated to helping
          businesses grow through secure, scalable, and high-performance technologies.
          From cloud hosting and storage to DevOps and cybersecurity, we deliver end-to-end
          solutions tailored to your needs. Our focus is on reliability, innovation,
          and long-term success—ensuring your digital infrastructure is always
          optimized, protected, and ready for the future.
        </p>
        <a href="#start" className="btn btn-outline-white about-btn">Learn More</a>
      </div>
    </section>
  );
}
