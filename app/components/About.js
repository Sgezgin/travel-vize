export default function About() {
  const advantages = [
    {
      title: 'Yüksek Başarı Oranı',
      description: '%98 vize onay oranımızla sektörde lider konumdayız',
      icon: '🎯',
      stat: '%98'
    },
    {
      title: 'Hızlı Süreç',
      description: 'Ortalama 5-7 iş günü içinde başvurunuzu tamamlıyoruz',
      icon: '⚡',
      stat: '5-7 Gün'
    },
    {
      title: 'Uzman Ekip',
      description: '10+ yıl deneyimli vize danışmanları ile çalışıyoruz',
      icon: '👥',
      stat: '10+ Yıl'
    },
    {
      title: '7/24 Destek',
      description: 'Süreç boyunca kesintisiz destek ve bilgilendirme',
      icon: '🕐',
      stat: '7/24'
    }
  ];

  const features = [
    {
      title: 'Şeffaf Fiyatlandırma',
      description: 'Hiçbir gizli ücret yok, tüm maliyetler baştan bellidir',
      icon: '💰'
    },
    {
      title: 'Kişiselleştirilmiş Hizmet',
      description: 'Her müşterimize özel danışmanlık ve takip hizmeti',
      icon: '🎨'
    },
    {
      title: 'Güvenceli İşlem',
      description: 'Başvurunuz reddedilirse ücret iadesi garantisi',
      icon: '🛡️'
    },
    {
      title: 'Geniş Network',
      description: '50+ ülke konsolosluğu ile direkt bağlantılarımız',
      icon: '🌍'
    }
  ];

  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      location: 'İstanbul',
      text: 'TravelVize sayesinde Schengen vizemi çok hızlı aldım. Profesyonel ekip, harika hizmet!',
      rating: 5,
      service: 'Schengen Vizesi'
    },
    {
      name: 'Ayşe Kaya',
      location: 'Ankara',
      text: 'Amerika vizesi için endişeliydim ama TravelVize ile çok kolay oldu. Teşekkürler!',
      rating: 5,
      service: 'Amerika Vizesi'
    },
    {
      name: 'Can Öztürk',
      location: 'İzmir',
      text: 'İngiltere vizem 1 haftada çıktı. Böyle hızlı ve güvenilir hizmet beklemiyordum.',
      rating: 5,
      service: 'İngiltere Vizesi'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Neden TravelVize?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sektördeki deneyimimiz ve müşteri odaklı yaklaşımımızla vize başvuru 
            sürecinizi en kolay ve güvenilir şekilde yönetiyoruz.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
                {advantage.stat}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              TravelVize Hikayesi
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                2015 yılında kurulan TravelVize, müşterilerine en kaliteli vize danışmanlığı 
                hizmetini sunmak amacıyla yola çıktı. Sektördeki deneyimimiz ve sürekli 
                gelişen teknolojimizle, vize başvuru sürecini kolaylaştırmanın öncüsü olduk.
              </p>
              <p>
                Bugüne kadar 15.000&rsquoden fazla mutlu müşterimize hizmet verdik ve %98 başarı 
                oranımızla sektörde öncü konuma geldik. Amacımız, herkesin hayalindeki 
                seyahate çıkabilmesi için vize engellerini kaldırmaktır.
                {"It's a great day"}
              </p>
              <p>
                Uzman ekibimiz, sürekli eğitim ve gelişim programlarıyla kendini yeniliyor 
                ve müşterilerimize en güncel bilgiler ışığında hizmet veriyor.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold">15K+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div className="bg-green-600 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-green-100">Ülke Vizesi</div>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold">8</div>
              <div className="text-purple-100">Yıl Deneyim</div>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold">%98</div>
              <div className="text-orange-100">Başarı Oranı</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Avantajlarımız
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Müşteri Yorumları
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}