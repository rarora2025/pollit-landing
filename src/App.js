import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Community />
      <Footer />
    </>
  );
}

export default App;
