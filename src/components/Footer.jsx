export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img src="/cloud_footer.png" alt="CloudServer logo" className="footer-logo" />
          <p className="footer-desc">
            We specialize in delivering secure, scalable, and high-performance cloud solutions
            tailored to modern business needs. From reliable hosting and data storage to
            advanced cybersecurity and DevOps, our services are designed to simplify
            operations and support long-term growth.
          </p>
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
          <p>Copyright &amp; Terms © 2025 Cloudserver. All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-center">
          <a href="#">Terms of Use</a>
          <span className="sep">|</span>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-bottom-right">
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
