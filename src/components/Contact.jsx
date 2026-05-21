import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side simulation block (no API endpoint required)
    console.log('Form data processed successfully on client-side:', formData);
    setIsSubmitted(true);

    // Reset the form values back to empty strings
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="content-section contact-section">
      <div className="contact-inner">
        <div className="contact-heading">
          <h2>
            <span className="text-white">Get</span>{' '}
            <span className="text-blue">in Touch</span>
          </h2>
        </div>

        {isSubmitted ? (
          <div className="success-message-container" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6' }}>✓</div>
            <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>Thank you for reaching out!</h3>
            <p style={{ color: '#8b9ab5', fontSize: '0.95rem' }}>
              Your message has been safely recorded locally. Since this is a demo environment, no external data was sent.
            </p>
            <button 
              type="button" 
              className="btn btn-outline" 
              style={{ marginTop: '1.5rem' }}
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="two-col">
              <label>
                <span className="label-text">First Name <span className="req">*</span></span>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter name" 
                  required
                />
              </label>
              <label>
                <span className="label-text">Last Name <span className="req">*</span></span>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter name" 
                  required
                />
              </label>
            </div>

            <div className="two-col" style={{ marginTop: '1.1rem' }}>
              <label>
                <span className="label-text">Email <span className="req">*</span></span>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email" 
                  required
                />
              </label>
              <label>
                <span className="label-text">Mobile No. <span className="req">*</span></span>
                <input 
                  type="tel" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile no." 
                  required
                />
              </label>
            </div>

            <div style={{ marginTop: '1.1rem' }}>
              <label>
                <span className="label-text">Message <span className="req">*</span></span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message" 
                  rows={6} 
                  required
                ></textarea>
              </label>
            </div>

            <div className="submit-row" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.8rem' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: 'auto', padding: '0.6rem 1.8rem 0.6rem 0.65rem', cursor: 'pointer' }}
              >
                <span className="arrow-circle">↗</span> Submit Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}