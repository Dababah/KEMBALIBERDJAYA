import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-orange-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-5xl">KB</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Kembali <span className="text-orange-400">Berdjaya</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            Racikan Rasa Khas dengan Sentuhan Modern
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Kedai Berdjaya | Resto & Cafe Nusantara
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Menu
            </a>
            <a 
              href="#location"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Lokasi & Jam Buka
            </a>
          </div>

          {/* Operating Hours Badge */}
          <div className="mt-12 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
            <p className="text-green-400 font-semibold text-lg mb-1">🕐 Buka Setiap Hari</p>
            <p className="text-white text-sm">
              Breakfast: 06:00-11:00 | Lunch-Dinner: 11:00-22:00
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
    </section>
  );
}
