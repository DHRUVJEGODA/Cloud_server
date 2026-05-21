const PRICING_PLANS = [
  {
    id: 'plan-basic',
    name: 'Basic plan',
    price: '$20',
    note: 'Billed annually.',
    iconClass: 'fa-layer-group',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support'
    ]
  },
  {
    id: 'plan-premium',
    name: 'Premium plan',
    price: '$40',
    note: 'Billed annually.',
    iconClass: 'fa-cubes',
    features: [
      'Access to all basic + premium features',
      'Advanced reporting and insights',
      'Up to 50 individual users',
      '100GB individual data each user',
      'Priority 24/7 chat support'
    ]
  },
  {
    id: 'plan-advance',
    name: 'Advance plan',
    price: '$80',
    note: 'Billed annually.',
    iconClass: 'fa-box-open',
    features: [
      'Access to all enterprise capabilities',
      'Real-time custom analytics dashboard',
      'Unlimited individual users',
      '1TB individual data each user',
      'Dedicated account support specialist'
    ]
  }
];

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
        {PRICING_PLANS.map((plan) => (
          <article className="pricing-card" key={plan.id}>
            <div className="pricing-icon">
              <i className={`fa-solid ${plan.iconClass}`}></i>
            </div>
            <p className="plan-name">{plan.name}</p>
            <strong className="plan-price">
              {plan.price}
              <span className="per">/month</span>
            </strong>
            <p className="plan-note">{plan.note}</p>
            
            <ul className="plan-features">
              {plan.features.map((feature, fIndex) => (
                <li key={`${plan.id}-feat-${fIndex}`}>
                  <i className="fa-regular fa-circle-check check-icon"></i>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="#start" className="btn pricing-cta-btn">
              <span className="pricing-arrow-badge">↗</span>Get Started
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}