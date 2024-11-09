import React from 'react';
import { Server, Database, Cpu, Wifi, Cloud, ShieldCheck } from 'lucide-react';
import '../styles/technology.css';

const TechCard = ({ icon: Icon, title, items }) => (
  <div className="tech-card">
    <div className="tech-icon">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Technology = () => {
  const techStacks = [
    {
      icon: Server,
      title: "Hardware Components",
      items: [
        "Solar-powered sensor networks",
        "IoT enabled monitoring devices",
        "Automated irrigation systems",
        "Weather stations",
        "Soil analysis sensors"
      ]
    },
    {
      icon: Database,
      title: "Data Processing",
      items: [
        "Real-time data collection",
        "Cloud storage solutions",
        "Data preprocessing",
        "Analytics pipeline",
        "Backup systems"
      ]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      items: [
        "Predictive analytics",
        "Crop disease detection",
        "Yield optimization",
        "Weather forecasting",
        "Resource optimization"
      ]
    },
    {
      icon: Wifi,
      title: "Connectivity",
      items: [
        "Low-power networks",
        "Mesh networking",
        "Remote monitoring",
        "Real-time alerts",
        "Mobile connectivity"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      items: [
        "Scalable architecture",
        "Load balancing",
        "API integration",
        "Automated deployment",
        "24/7 monitoring"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Security",
      items: [
        "End-to-end encryption",
        "Secure authentication",
        "Data protection",
        "Regular audits",
        "Compliance checks"
      ]
    }
  ];

  return (
    <section id="technology" className="technology-section">
      <div className="wave-top"></div>
      <div className="container">
        <div className="section-header">
          <h2>Our Technology Stack</h2>
          <p>Cutting-edge solutions powering smart agriculture</p>
        </div>
        
        <div className="tech-grid">
          {techStacks.map((tech, index) => (
            <TechCard 
              key={index}
              icon={tech.icon}
              title={tech.title}
              items={tech.items}
            />
          ))}
        </div>
      </div>
      <div className="wave-bottom"></div>
    </section>
  );
};

export default Technology;