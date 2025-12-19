import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="bg-surface/70 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            Unified Vision. Diverse Strengths.
          </h1>
          <p className="font-body text-lg md:text-xl mt-4 max-w-2xl mx-auto text-text-secondary">
            Treishvaam Group is a diversified conglomerate committed to building foundational value and driving innovation across key sectors of the economy.
          </p>
          <Link 
            to="/about-us"
            className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-transform duration-300 transform hover:scale-105"
          >
            Explore The Group
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;