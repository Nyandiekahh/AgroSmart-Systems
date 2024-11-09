import React from 'react';
import { Cloud, Droplets, Cpu, LineChart, Sprout, Sun } from 'lucide-react';
import '../styles/features.css';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: "Weather Integration",
      description: "Real-time weather monitoring and forecasting for optimal farming decisions"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated watering systems based on soil moisture and weather conditions"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for crop health monitoring and yield prediction"
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Comprehensive dashboards showing real-time farming metrics and trends"
    },
    {
      icon: Sprout,
      title: "Crop Monitoring",
      description: "Continuous monitoring of crop health and growth patterns"
    },
    {
      icon: Sun,
      title: "Solar Powered",
      description: "Sustainable energy solutions powering our smart farming systems"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Features</h2>
          <p>Innovative solutions for modern agriculture</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="features-cta">
          <button className="cta-button">Explore All Features</button>
        </div>
      </div>
    </section>
  );
};

export default Features;