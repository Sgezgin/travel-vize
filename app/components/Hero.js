import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              ⭐ Türkiye&rsquo;nin En Güvenilir Vize Danışmanlığı
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Vize Başvurunuz
              <span className="text-blue-600"> Garantili</span>
              <br />
              Hızlı ve Güvenli
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              TravelVize ile dünya genelinde 50+ ülkeye vize başvurunuzu profesyonel ekibimizle 
              kolaylaştırın. %98 başarı oranımızla hayalinizdeki seyahate çıkın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Ücretsiz Danışmanlık Al
              </a>
              <a
                href="#services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Hizmetleri İncele
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15K+</div>
                <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 text-sm">Ülke Vizesi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">%98</div>
                <div className="text-gray-600 text-sm">Başarı Oranı</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              {/* Modern Illustration */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-md">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Vize Süreci</h3>
                  <p className="text-gray-600 text-sm">3 adımda vize başvurunuzu tamamlayın</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Ücretsiz Danışmanlık</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Evrak Hazırlığı</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Vize Teslimi</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}