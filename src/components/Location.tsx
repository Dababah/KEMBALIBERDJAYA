import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kunjungi <span className="text-orange-600">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan kami di lokasi strategis di Yogyakarta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jl. Waringinsari V No. 21, Ngropoh, Condongcatur<br />
                    Kec. Depok, Kabupaten Sleman<br />
                    Yogyakarta 55281
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
                  <div className="space-y-1 text-gray-700">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="font-semibold">Buka Setiap Hari</span>
                    </p>
                    <p className="ml-4">Breakfast: 06:00 - 11:00</p>
                    <p className="ml-4">Lunch-Dinner: 11:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kontak</h3>
                  <p className="text-gray-700">WhatsApp: +62 xxx-xxxx-xxxx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">info@kembaliberdjaya.com</p>
                </div>
              </div>
            </div>

            {/* Reservation CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Reservasi Meja/Ruangan</h3>
              <p className="mb-6 opacity-90">
                Pastikan tempat Anda tersedia dengan melakukan reservasi terlebih dahulu
              </p>
              <button className="w-full bg-white text-orange-600 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300">
                Reservasi Sekarang
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-1">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.244!2d110.39894!3d-7.7541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMTQuOCJTIDExMMKwMjMnNTYuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>

            {/* Directions Button */}
            <div className="mt-6">
              <a 
                href="https://maps.google.com/?q=Jl.+Waringinsari+V+No.+21+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white border-2 border-orange-600 text-orange-600 py-3 rounded-full font-bold text-center hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
