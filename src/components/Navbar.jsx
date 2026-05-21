export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <img
            src="/cloud_footer.png"
            alt="Cloud Server logo"
            className="navbar-logo-image"
          />
        </div>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <a href="#login" className="btn-nav-login">Login</a>
          <button type="button" className="btn-nav-primary" aria-label="Get Started">
            <span className="arrow-circle">↗</span>Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}