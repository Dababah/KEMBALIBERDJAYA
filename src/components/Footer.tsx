import React from 'react';
import { Instagram, MessageCircle, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kembali Berdjaya</h3>
                <p className="text-sm text-gray-400">Resto & Cafe Nusantara</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Racikan rasa khas dengan sentuhan modern untuk pengalaman kuliner yang tak terlupakan.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/kembaliberdjaya" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@kembaliberdjaya" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Music className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/62xxxxxxxxxx" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#promo" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Promo
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dine In</li>
              <li>Take Away</li>
              <li>Delivery</li>
              <li>Catering</li>
              <li>Reservasi</li>
            </ul>
          </div>

          {/* Delivery Partners */}
          <div>
            <h4 className="text-lg font-bold mb-4">Pesan Online</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">GoFood</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">GrabFood</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">ShopeeFood</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Jam Buka</h4>
              <p className="text-sm text-gray-400">Setiap Hari</p>
              <p className="text-sm text-gray-400">06:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Kembali Berdjaya. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
