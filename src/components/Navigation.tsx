import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">KB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Kembali Berdjaya</h1>
              <p className="text-xs text-gray-600">Resto & Cafe Nusantara</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('promo')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Promo
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Lokasi
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Reservasi
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 text-gray-700">
              Menu
            </button>
            <button onClick={() => scrollToSection('promo')} className="block w-full text-left py-2 text-gray-700">
              Promo
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left py-2 text-gray-700">
              Lokasi
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full"
            >
              Reservasi
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
