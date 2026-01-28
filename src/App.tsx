import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuHighlights } from './components/MenuHighlights';
import { Promos } from './components/Promos';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <MenuHighlights />
      <Promos />
      <Location />
      <Footer />
    </div>
  );
}
