export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Ücretsiz Danışmanlık',
      description: 'Uzman ekibimizle görüşerek vize türünüzü ve gereksinimlerinizi belirleyin. Size özel yol haritası çıkartalım.',
      details: [
        'Vize türü belirleme',
        'Gerekli evrak listesi',
        'Süreç ve maliyet bilgilendirmesi',
        'Randevu tarihi planlama'
      ],
      icon: '💬',
      duration: '30 dakika',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Evrak Hazırlığı',
      description: 'Gerekli tüm belgeleri hazırlayın. Eksik veya hatalı evrakları birlikte tamamlayalım.',
      details: [
        'Belge kontrolü ve düzenleme',
        'Çeviri hizmetleri',
        'Fotoğraf standardizasyonu',
        'Form doldurma desteği'
      ],
      icon: '📋',
      duration: '2-3 gün',
      color: 'green'
    },
    {
      number: '03',
      title: 'Başvuru Süreci',
      description: 'Konsolosluk randevunuzu alıp başvurunuzu yapalım. Süreç boyunca yanınızdayız.',
      details: [
        'Randevu alma işlemleri',
        'Başvuru formlarının hazırlanması',
        'Ön inceleme ve onay',
        'Konsolosluk başvurusu'
      ],
      icon: '📝',
      duration: '1-2 gün',
      color: 'purple'
    },
    {
      number: '04',
      title: 'Takip ve Teslimat',
      description: 'Başvurunuzun durumunu takip edelim ve vizeniz hazır olduğunda size teslim edelim.',
      details: [
        'Başvuru durumu takibi',
        'Güncel bilgilendirme',
        'Vize teslim alma',
        'Seyahat öncesi bilgilendirme'
      ],
      icon: '🎯',
      duration: '5-15 gün',
      color: 'orange'
    }
  ];

  const whyChooseProcess = [
    {
      title: 'Deneyimli Uzmanlar',
      description: 'Her ülke için özel eğitim almış uzman danışmanlarımız',
      icon: '👨‍💼'
    },
    {
      title: 'Hızlı İşlem',
      description: 'Optimize edilmiş süreçlerimizle minimum bekleme süresi',
      icon: '⚡'
    },
    {
      title: 'Tam Destek',
      description: 'Baştan sona tam destek, hiçbir aşamada yalnız değilsiniz',
      icon: '🤝'
    },
    {
      title: 'Yüksek Başarı',
      description: '%98 başarı oranı ile güvenilir vize başvuru süreci',
      icon: '🏆'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vize Başvuru Sürecimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 basit adımda vize başvurunuzu tamamlayın. Her aşamada profesyonel 
            destek ve rehberlik ile yanınızdayız.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className={`w-16 h-16 bg-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto`}>
                  {step.number}
                </div>
                
                {/* Icon and Duration */}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <div className={`text-${step.color}-600 font-medium text-sm`}>
                    {step.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-3">Dahil Olan Hizmetler:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <svg className={`w-4 h-4 text-${step.color}-500 mt-1 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Sürecimizin Avantajları
            </h3>
            <p className="text-lg text-gray-600">
              Neden binlerce müşteri sürecimizi tercih ediyor?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Sık Sorulan Sorular
            </h3>
            <p className="text-xl opacity-90">
              Vize süreci hakkında merak ettikleriniz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Vize başvurum ne kadar sürer?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Ülkeye göre değişmekle birlikte ortalama 5-15 iş günü sürmektedir.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Vize reddedilirse ne olur?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Hizmet bedelinizi iade ederiz ve tekrar başvuru için destek veririz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Hangi belgeler gerekli?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Her ülke için farklıdır. Ücretsiz danışmanlık ile tam listeyi alın.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acil başvuru mümkün mü?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Evet, acil durumlarda hızlı başvuru seçeneklerimiz mevcuttur.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Hemen Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}