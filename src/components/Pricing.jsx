export default function Pricing() {
  return (
    <section id="pricing" className="content-section pricing-section">
      <div className="section-heading">
        <div className="pricing-kicker">
          <span className="pricing-kicker-text">PRICING PLANS</span>
          <span className="pricing-kicker-line"></span>
        </div>
        <h2 className="pricing-heading">
          Choose a plan that fits your needs with scalable, secure, and<br />
          high-performance <span className="text-blue">cloud solutions—no hidden costs.</span>
        </h2>
      </div>

      <div className="pricing-grid">
        <article className="pricing-card">
          <div className="pricing-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <p className="plan-name">Basic plan</p>
          <strong className="plan-price">$20<span className="per">/month</span></strong>
          <p className="plan-note">Billed annually.</p>
          <ul className="plan-features">
            <li><i className="fa-regular fa-circle-check check-icon"></i>Access to all basic features</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic reporting and analytics</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Up to 10 individual users</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>20GB individual data each user</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic chat and email support</li>
          </ul>
          <a href="#start" className="btn pricing-cta-btn">
            <span className="pricing-arrow-badge">↗</span>Get Started
          </a>
        </article>

        <article className="pricing-card">
          <div className="pricing-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <p className="plan-name">Premium plan</p>
          <strong className="plan-price">$40<span className="per">/month</span></strong>
          <p className="plan-note">Billed annually.</p>
          <ul className="plan-features">
            <li><i className="fa-regular fa-circle-check check-icon"></i>Access to all basic features</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic reporting and analytics</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Up to 10 individual users</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>20GB individual data each user</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic chat and email support</li>
          </ul>
          <a href="#start" className="btn pricing-cta-btn">
            <span className="pricing-arrow-badge">↗</span>Get Started
          </a>
        </article>

        <article className="pricing-card">
          <div className="pricing-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <p className="plan-name">Advance plan</p>
          <strong className="plan-price">$80<span className="per">/month</span></strong>
          <p className="plan-note">Billed annually.</p>
          <ul className="plan-features">
            <li><i className="fa-regular fa-circle-check check-icon"></i>Access to all basic features</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic reporting and analytics</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Up to 10 individual users</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>20GB individual data each user</li>
            <li><i className="fa-regular fa-circle-check check-icon"></i>Basic chat and email support</li>
          </ul>
          <a href="#start" className="btn pricing-cta-btn">
            <span className="pricing-arrow-badge">↗</span>Get Started
          </a>
        </article>
      </div>
    </section>
  );
}
