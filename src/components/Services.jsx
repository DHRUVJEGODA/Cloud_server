const SERVICES_DATA = [
  { id: 'srv-hosting', icon: "fa-cloud", title: "Cloud Hosting", desc: "High-performance hosting solutions ensuring fast loading, maximum uptime, and seamless user experience for your applications." },
  { id: 'srv-storage', icon: "fa-server", title: "Cloud Storage", desc: "Secure and scalable storage systems to store, manage, and access your data efficiently from anywhere anytime with advanced encryption and reliability." },
  { id: 'srv-security', icon: "fa-shield-halved", title: "Cyber Security", desc: "Advanced security solutions protecting your systems, networks, and sensitive data from modern cyber threats and advanced attacks." },
  { id: 'srv-devops', icon: "fa-gears", title: "DevOps Solutions", desc: "Automate development workflows with efficient CI/CD pipelines, faster deployments, and improved collaboration across teams and environments." },
  { id: 'srv-monitor', icon: "fa-chart-line", title: "Performance Monitoring", desc: "Real-time monitoring tools to track system performance, detect issues early, and ensure smooth and uninterrupted operations." },
  { id: 'srv-scale', icon: "fa-users-gear", title: "Scalability & Support", desc: "Flexible infrastructure and expert support services that adapt to your business growth and evolving technical requirements." }
];

export default function Services() {
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
        {SERVICES_DATA.map((srv) => (
          <div className="service-card" key={srv.id}>
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