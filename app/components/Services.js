export default function Services() {
  const services = [
    {
      id: 'schengen',
      title: 'Schengen Vizesi',
      description: 'Avrupa\'nın 26 ülkesine tek vize ile seyahat edin',
      countries: ['Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda', 'Belçika'],
      icon: '🇪🇺',
      color: 'blue',
      popular: true
    },
    {
      id: 'usa',
      title: 'Amerika Vizesi',
      description: 'B1/B2 turist ve iş vizesi için profesyonel destek',
      countries: ['Amerika Birleşik Devletleri'],
      icon: '🇺🇸',
      color: 'red',
      popular: false
    },
    {
      id: 'uk',
      title: 'İngiltere Vizesi',
      description: 'Standart ziyaretçi vizesi ve uzun dönem vizeler',
      countries: ['Birleşik Krallık'],
      icon: '🇬🇧',
      color: 'indigo',
      popular: false
    },
    {
      id: 'canada',
      title: 'Kanada Vizesi',
      description: 'Geçici oturma ve ziyaretçi vizesi başvuruları',
      countries: ['Kanada'],
      icon: '🇨🇦',
      color: 'green',
      popular: false
    },
    {
      id: 'australia',
      title: 'Avustralya Vizesi',
      description: 'Turistik ve iş amaçlı vize başvuruları',
      countries: ['Avustralya'],
      icon: '🇦🇺',
      color: 'yellow',
      popular: false
    },
    {
      id: 'japan',
      title: 'Japonya Vizesi',
      description: 'Kısa dönem turistik ve iş vizesi',
      countries: ['Japonya'],
      icon: '🇯🇵',
      color: 'pink',
      popular: false
    },
    {
      id: 'russia',
      title: 'Rusya Vizesi',
      description: 'Turistik ve iş amaçlı Rusya vizesi',
      countries: ['Rusya'],
      icon: '🇷🇺',
      color: 'purple',
      popular: false
    },
    {
      id: 'china',
      title: 'Çin Vizesi',
      description: 'Çin Halk Cumhuriyeti vize başvuruları',
      countries: ['Çin'],
      icon: '🇨🇳',
      color: 'orange',
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: 'Vize Danışmanlığı',
      description: 'Uzman ekibimizle ücretsiz ön danışmanlık',
      icon: '💼'
    },
    {
      title: 'Evrak Hazırlığı',
      description: 'Tüm gerekli belgelerin hazırlanması',
      icon: '📋'
    },
    {
      title: 'Randevu Alma',
      description: 'Konsolosluk randevu işlemleri',
      icon: '📅'
    },
    {
      title: 'Seyahat Sigortası',
      description: 'Yurt dışı sağlık sigortası hizmetleri',
      icon: '🛡️'
    },
    {
      title: 'Otel Rezervasyonu',
      description: 'Vize için geçerli konaklama rezervasyonu',
      icon: '🏨'
    },
    {
      title: 'Uçak Bileti',
      description: 'Gidiş-dönüş bilet rezervasyon hizmetleri',
      icon: '✈️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vize Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya genelinde 50+ ülkeye vize başvurunuz için profesyonel danışmanlık 
            ve tam destek hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Main Visa Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    En Popüler
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.countries.slice(0, 3).map((country, index) => (
                    <div key={index} className="text-sm text-gray-500">
                      {country}
                    </div>
                  ))}
                  {service.countries.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{service.countries.length - 3} ülke daha
                    </div>
                  )}
                </div>
                
                <button className={`w-full bg-${service.color}-600 text-white py-3 rounded-full font-semibold hover:bg-${service.color}-700 transition-colors`}>
                  Detayları Gör
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ek Hizmetlerimiz
            </h3>
            <p className="text-lg text-gray-600">
              Vize sürecinizde ihtiyacınız olan tüm hizmetleri tek yerden alın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="text-2xl">{service.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Hangi Vizeye İhtiyacınız Var?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Uzman ekibimizle ücretsiz danışmanlık alın ve en uygun vize türünü belirleyin
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Ücretsiz Danışmanlık Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}