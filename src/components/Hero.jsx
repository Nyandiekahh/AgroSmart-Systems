import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Smart Farming for a Sustainable Future</h1>
        <p>Revolutionizing agriculture through intelligent monitoring and automation. 
           Empowering farmers with data-driven decisions and precision farming techniques.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
        <a href="#features" className="scroll-indicator">
          <span>Discover More</span>
          <ChevronDown className="bounce" />
        </a>
      </div>
      <div className="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
          {/* Sky and Background */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a7d9ff" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="100%" stopColor="#2E7D32"/>
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="600" fill="url(#skyGradient)"/>
          
          {/* Rolling Hills */}
          <path d="M0,400 Q200,350 400,400 T800,380 L800,600 L0,600 Z" fill="url(#fieldGradient)"/>
          
          {/* Solar Panel */}
          <g transform="translate(600,320) scale(0.8)">
            <rect x="0" y="0" width="120" height="80" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
            <line x1="40" y1="0" x2="40" y2="80" stroke="#1565C0" strokeWidth="2"/>
            <line x1="80" y1="0" x2="80" y2="80" stroke="#1565C0" strokeWidth="2"/>
            <line x1="0" y1="40" x2="120" y2="40" stroke="#1565C0" strokeWidth="2"/>
            <rect x="55" y="80" width="10" height="40" fill="#607D8B"/>
          </g>

          {/* Crops */}
          <g id="crop-row">
            <g transform="translate(100,450)">
              <path d="M0,0 C10,-20 -10,-20 0,-40 C10,-60 -10,-60 0,-80" 
                    stroke="#4CAF50" fill="none" strokeWidth="3"/>
              <circle cx="0" cy="-85" r="5" fill="#81C784"/>
            </g>
          </g>
          
          {/* Repeat crops */}
          <use href="#crop-row" x="50" y="0"/>
          <use href="#crop-row" x="100" y="0"/>
          <use href="#crop-row" x="150" y="0"/>
          <use href="#crop-row" x="200" y="0"/>

          {/* Smart Sensor */}
          <g transform="translate(300,380)">
            <rect x="-10" y="0" width="20" height="100" fill="#78909C"/>
            <rect x="-25" y="-40" width="50" height="40" rx="5" fill="#42A5F5"/>
            <circle cx="0" cy="-20" r="8" fill="#1565C0"/>
            <rect x="-15" y="-35" width="30" height="5" fill="#90CAF9"/>
          </g>

          {/* Drone */}
          <g transform="translate(500,200)">
            <path d="M-40,-5 L40,-5 L45,0 L40,5 L-40,5 L-45,0 Z" fill="#455A64"/>
            <circle cx="0" cy="0" r="15" fill="#78909C"/>
            <g transform="translate(-40,0)">
              <circle cx="0" cy="0" r="10" fill="#90A4AE"/>
              <circle cx="0" cy="0" r="5" fill="#CFD8DC"/>
            </g>
            <g transform="translate(40,0)">
              <circle cx="0" cy="0" r="10" fill="#90A4AE"/>
              <circle cx="0" cy="0" r="5" fill="#CFD8DC"/>
            </g>
          </g>

          {/* Data Visualization Element */}
          <g transform="translate(150,150)">
            <rect x="-40" y="-20" width="80" height="40" rx="5" fill="#FFFFFF" stroke="#2196F3" strokeWidth="2"/>
            <path d="M-30,0 L-20,10 L-10,-5 L0,15 L10,-10 L20,5 L30,0" 
                  stroke="#2196F3" fill="none" strokeWidth="2"/>
          </g>

          {/* Connected Lines */}
          <g stroke="#90A4AE" strokeWidth="1" strokeDasharray="5,5">
            <path d="M150,170 L300,340"/>
            <path d="M500,200 L300,340"/>
            <path d="M600,320 L300,340"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;