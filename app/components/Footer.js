'use client';
import Image from 'next/image';

export default function Footer() {
  const services = [
    'Schengen Vizesi',
    'Amerika Vizesi',
    'İngiltere Vizesi',
    'Kanada Vizesi',
    'Avustralya Vizesi',
    'Japonya Vizesi'
  ];

  const quickLinks = [
    { title: 'Ana Sayfa', href: '#home' },
    { title: 'Hizmetlerimiz', href: '#services' },
    { title: 'Hakkımızda', href: '#about' },
    { title: 'Süreç', href: '#process' },
    { title: 'İletişim', href: '#contact' },
    { title: 'Blog', href: '#' }
  ];

  const legalLinks = [
    { title: 'Gizlilik Politikası', href: '#' },
    { title: 'Kullanım Şartları', href: '#' },
    { title: 'KVKK', href: '#' },
    { title: 'Çerez Politikası', href: '#' }
  ];

  const countries = [
    '🇩🇪 Almanya',
    '🇫🇷 Fransa',
    '🇮🇹 İtalya',
    '🇪🇸 İspanya',
    '🇳🇱 Hollanda',
    '🇧🇪 Belçika',
    '🇺🇸 Amerika',
    '🇬🇧 İngiltere',
    '🇨🇦 Kanada',
    '🇦🇺 Avustralya',
    '🇯🇵 Japonya',
    '🇷🇺 Rusya'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="https://www.travelvize.com/wp-content/uploads/2022/08/LOGOV3.png"
                alt="TravelVize Logo"
                width={160}
                height={40}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin en güvenilir vize danışmanlığı. 2015'ten beri 15.000+ mutlu müşteri ile 
              %98 başarı oranında vize hizmetleri sunuyoruz.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.653-.31-1.618c0-1.52.881-2.653 1.979-2.653.933 0 1.384.7 1.384 1.538 0 .939-.598 2.343-.905 3.647-.258 1.089.547 1.977 1.621 1.977 1.945 0 3.445-2.051 3.445-5.015 0-2.62-1.881-4.452-4.566-4.452-3.107 0-4.931 2.329-4.931 4.737 0 .939.361 1.948.812 2.495.089.108.102.202.075.315-.082.339-.266 1.076-.302 1.228-.047.196-.154.237-.355.143-1.3-.604-2.111-2.5-2.111-4.028 0-3.46 2.514-6.633 7.242-6.633 3.801 0 6.758 2.708 6.758 6.326 0 3.774-2.38 6.807-5.68 6.807-1.109 0-2.155-.576-2.511-1.263l-.682 2.596c-.247.952-.915 2.145-1.362 2.874 1.028.318 2.119.488 3.257.488C18.636 24.009 24.005 18.641 24.005 11.987 24.005 5.367 18.636.001 12.017.001z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Vize Hizmetleri</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400">📍</span>
                <div>
                  <p className="text-gray-300">
                    Çankaya, Ankara<br />
                    Türkiye
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+903121234567" className="text-gray-300 hover:text-white">
                  +90 312 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:info@travelvize.com" className="text-gray-300 hover:text-white">
                  info@travelvize.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">💬</span>
                <a href="https://wa.me/905321234567" className="text-gray-300 hover:text-white">
                  WhatsApp Destek
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-center">Vize Verdiğimiz Ülkeler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <span className="text-sm text-gray-300">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 TravelVize. Tüm hakları saklıdır.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                TÜRSAB Üyesi
              </div>
              <div className="text-gray-400 text-sm">
                ISO 9001
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </button>
    </footer>
  );
}