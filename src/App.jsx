import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Technology />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;