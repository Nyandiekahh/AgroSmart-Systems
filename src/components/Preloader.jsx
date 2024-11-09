import React from 'react';
import { Sprout } from 'lucide-react';
import '../styles/preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="icon-wrapper">
          <Sprout className="plant-icon" />
        </div>
        <div className="loader-ring"></div>
        <p className="loading-text">Loading AgroSmart...</p>
      </div>
    </div>
  );
};

export default Preloader;