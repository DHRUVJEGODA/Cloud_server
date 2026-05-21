export default function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="contact-inner">
        <div className="contact-heading">
          <h2>
            <span className="text-white">Get</span>{' '}
            <span className="text-blue">in Touch</span>
          </h2>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="two-col">
            <label>
              <span className="label-text">First Name <span className="req">*</span></span>
              <input type="text" placeholder="Enter name" readOnly aria-readonly="true" />
            </label>
            <label>
              <span className="label-text">Last Name <span className="req">*</span></span>
              <input type="text" placeholder="Enter name" readOnly aria-readonly="true" />
            </label>
          </div>

          <div className="two-col" style={{ marginTop: '1.1rem' }}>
            <label>
              <span className="label-text">Email <span className="req">*</span></span>
              <input type="email" placeholder="Enter email" readOnly aria-readonly="true" />
            </label>
            <label>
              <span className="label-text">Mobile No. <span className="req">*</span></span>
              <input type="tel" placeholder="Enter mobile no." readOnly aria-readonly="true" />
            </label>
          </div>

          <div style={{ marginTop: '1.1rem' }}>
            <label>
              <span className="label-text">Message <span className="req">*</span></span>
              <textarea placeholder="Enter message" rows={6} readOnly aria-readonly="true"></textarea>
            </label>
          </div>

          <div className="submit-row" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.8rem' }}>
            <button
              type="submit"
              className="btn btn-primary pricing-cta"
              style={{ width: 'auto', padding: '0.6rem 1.8rem 0.6rem 0.65rem' }}
              disabled
              aria-disabled="true"
              title="Form is static"
            >
              <span className="arrow-circle">↗</span> Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
