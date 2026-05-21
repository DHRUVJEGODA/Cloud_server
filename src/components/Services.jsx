export default function Services() {
  const services = [
    { icon: "fa-cloud", title: "Cloud Hosting", desc: "High-performance hosting solutions ensuring fast loading, maximum uptime, and seamless user experience for your applications." },
    { icon: "fa-server", title: "Cloud Storage", desc: "Secure and scalable storage systems to store, manage, and access your data efficiently from anywhere anytime with advanced encryption and reliability." },
    { icon: "fa-shield-halved", title: "Cyber Security", desc: "Advanced security solutions protecting your systems, networks, and sensitive data from modern cyber threats and advanced attacks." },
    { icon: "fa-gears", title: "DevOps Solutions", desc: "Automate development workflows with efficient CI/CD pipelines, faster deployments, and improved collaboration across teams and environments." },
    { icon: "fa-chart-line", title: "Performance Monitoring", desc: "Real-time monitoring tools to track system performance, detect issues early, and ensure smooth and uninterrupted operations." },
    { icon: "fa-users-gear", title: "Scalability & Support", desc: "Flexible infrastructure and expert support services that adapt to your business growth and evolving technical requirements." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header center">
        <div className="section-subtitle">
          <span className="line"></span>
          <h5>SERVICES</h5>
          <span className="line"></span>
        </div>
        <h2>
          Provide Reliable Solutions to Simplify and Strengthen<br />
          Your <span className="text-blue">Cloud Operations</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((srv, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-badge">
              <i className={`fa-solid ${srv.icon}`}></i>
            </div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
