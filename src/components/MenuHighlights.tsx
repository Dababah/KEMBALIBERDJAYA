import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';

export function MenuHighlights() {
  const menuItems = [
    {
      name: "Lucky Bowl Berjaya",
      description: "Belanja dengan lucky bowl, lansung ambil mainan di lucky bowl!",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80",
      category: "Special",
      rating: 4.8
    },
    {
      name: "Work Berjaya",
      description: "Menu istimewa dengan harga hanya 40K - Perfect untuk WFB (Work From Berjaya)",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
      category: "Coffee & Food",
      rating: 4.9
    },
    {
      name: "Nasi Kuning Special",
      description: "Nasi kuning dengan lauk lengkap khas Nusantara",
      image: "https://images.unsplash.com/photo-1596040033229-a0b13b1ab620?w=600&q=80",
      category: "Main Course",
      rating: 4.7
    },
    {
      name: "Es Kopi Berdjaya",
      description: "Kopi pilihan dengan racikan es yang menyegarkan",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
      category: "Beverages",
      rating: 4.8
    },
    {
      name: "Soto Ayam Kampung",
      description: "Soto ayam dengan bumbu rempah tradisional",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
      category: "Soup",
      rating: 4.9
    },
    {
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan topping istimewa ala Berdjaya",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
      category: "Main Course",
      rating: 4.8
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Menu <span className="text-orange-600">Pilihan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai pilihan menu terbaik kami yang telah dipilih khusus untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </section>
  );
}
