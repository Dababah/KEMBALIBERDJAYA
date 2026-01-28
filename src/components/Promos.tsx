import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tag, Users, Gift } from 'lucide-react';

export function Promos() {
  const promos = [
    {
      title: "Bestfriend Deals",
      price: "IDR 89K",
      description: "Rasakan kehangatan bersama sahabat dengan paket spesial kami",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
      icon: <Users className="w-6 h-6" />,
      badge: "POPULER"
    },
    {
      title: "Work From Berdjaya",
      price: "Mulai 40K",
      description: "Paket hemat untuk produktivitas maksimal. Cocok untuk WFB seharian!",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
      icon: <Gift className="w-6 h-6" />,
      badge: "HEMAT"
    },
    {
      title: "Lucky Bowl Promo",
      description: "Belanja di Lucky Bowl dan dapatkan mainan gratis!",
      image: "https://images.unsplash.com/photo-1587564177655-5a3fc2e90b3e?w=800&q=80",
      icon: <Tag className="w-6 h-6" />,
      badge: "SPESIAL"
    }
  ];

  return (
    <section id="promo" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Promo <span className="text-orange-600">Spesial</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jangan lewatkan penawaran menarik dari kami! Update promo terbaru setiap minggunya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {promos.map((promo, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {promo.badge}
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback 
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Price Tag */}
                {promo.price && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full">
                    <p className="text-2xl font-bold text-orange-600">{promo.price}</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white">
                    {promo.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{promo.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Tag className="w-5 h-5" />
                  Dapatkan Promo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Partners */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Pesan Melalui Aplikasi Favorit Anda
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Nikmati kemudahan pesan-antar langsung ke rumah atau kantor Anda
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              <p className="font-bold text-xl">GOFOOD</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              <p className="font-bold text-xl">GRABFOOD</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              <p className="font-bold text-xl">SHOPEEFOOD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
