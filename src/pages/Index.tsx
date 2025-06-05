
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Leadership from '../components/Leadership';
import Research from '../components/Research';
import Media from '../components/Media';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Leadership />
      <Research />
      <Media />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
