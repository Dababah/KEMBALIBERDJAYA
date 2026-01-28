import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Utensils, Heart, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Menu Nusantara",
      description: "Hidangan khas Indonesia dengan cita rasa autentik"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cafe Modern",
      description: "Suasana nyaman untuk bekerja dan bersantai"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Racikan Istimewa",
      description: "Resep rahasia yang telah diwariskan turun-temurun"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Terbaik",
      description: "Bahan premium dengan standar kebersihan tinggi"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-orange-600">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kedai Berdjaya hadir dengan konsep resto dan cafe yang memadukan kelezatan kuliner Nusantara dengan sentuhan modern
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-3"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
              alt="Restaurant interior"
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Pengalaman Kuliner yang Tak Terlupakan
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kembali Berdjaya adalah destinasi kuliner yang menghadirkan pengalaman unik dengan memadukan resep tradisional Nusantara dan inovasi modern. Setiap hidangan dirancang dengan cermat untuk memberikan kepuasan maksimal bagi setiap tamu kami.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dari sarapan pagi hingga makan malam, kami siap melayani Anda dengan menu-menu pilihan yang menggugah selera, dalam suasana yang hangat dan menyenangkan.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">128+</p>
                  <p className="text-sm text-gray-600">Menu Pilihan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">1,216+</p>
                  <p className="text-sm text-gray-600">Pelanggan Setia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
