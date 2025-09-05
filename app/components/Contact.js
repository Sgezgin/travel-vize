'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: ''
  });

  const visaTypes = [
    'Schengen Vizesi',
    'Amerika Vizesi (B1/B2)',
    'İngiltere Vizesi',
    'Kanada Vizesi',
    'Avustralya Vizesi',
    'Japonya Vizesi',
    'Rusya Vizesi',
    'Çin Vizesi',
    'Diğer'
  ];

  const countries = [
    'Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda', 'Belçika',
    'Amerika Birleşik Devletleri', 'İngiltere', 'Kanada', 'Avustralya',
    'Japonya', 'Rusya', 'Çin', 'Diğer'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Danışmanlık talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.');
  };

  const contactInfo = [
    {
      title: 'Telefon',
      value: '+90 312 123 45 67',
      icon: '📞',
      link: 'tel:+903121234567'
    },
    {
      title: 'WhatsApp',
      value: '+90 532 123 45 67',
      icon: '💬',
      link: 'https://wa.me/905321234567'
    },
    {
      title: 'E-posta',
      value: 'info@travelvize.com',
      icon: '✉️',
      link: 'mailto:info@travelvize.com'
    },
    {
      title: 'Adres',
      value: 'Çankaya, Ankara',
      icon: '📍',
      link: '#'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '09:00 - 15:00' },
    { day: 'Pazar', hours: 'Kapalı' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vize başvurunuz için ücretsiz danışmanlık almak istiyorsanız, 
            formu doldurun veya direkt bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ücretsiz Danışmanlık Formu
                </h3>
                <p className="text-gray-600">
                  Formu doldurun, uzman ekibimiz 24 saat içinde sizinle iletişime geçsin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gitmek İstediğiniz Ülke *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="">Ülke seçin</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vize Türü *
                  </label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">Vize türü seçin</option>
                    {visaTypes.map((visa, index) => (
                      <option key={index} value={visa}>{visa}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Vize başvurunuz hakkında detaylar, özel durumlar veya sorularınızı yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Ücretsiz Danışmanlık Talep Et
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Formu göndererek{' '}
                  <a href="#" className="text-blue-600 hover:underline">Gizlilik Politikamızı</a>
                  {' '}kabul etmiş olursunuz.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-blue-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Hızlı İletişim</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-blue-100 text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Çalışma Saatleri</h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-100 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-800 font-medium">Şu anda açığız</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                📞 Acil Durum Hattı
              </h3>
              <p className="text-red-700 mb-4">
                Acil vize durumları için 7/24 ulaşabilirsiniz
              </p>
              <a
                href="tel:+905321234567"
                className="block w-full bg-red-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                +90 532 123 45 67
              </a>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ofisimize Bekleriz</h3>
          <p className="text-xl mb-6 opacity-90">
            Ankara&rsquo;daki ofisimizde yüz yüze danışmanlık hizmeti de veriyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              📍 Haritada Görüntüle
            </a>
            <a
              href="tel:+903121234567"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 Randevu Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}