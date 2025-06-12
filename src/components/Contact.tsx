const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 neon-text">КОНТАКТЫ</h2>
          <div className="w-24 h-1 gaming-gradient mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6">
            Готовы обсудить ваш игровой проект?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="gaming-card p-6 rounded-xl hover:gaming-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                Свяжитесь с нами
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gaming-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-semibold">
                      contact@redshord.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gaming-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Телефон</div>
                    <div className="text-white font-semibold">
                      +7 (495) 123-45-67
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gaming-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Адрес</div>
                    <div className="text-white font-semibold">
                      Москва, Россия
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Социальные сети
                </h4>
                <div className="flex space-x-4">
                  {["Discord", "Twitter", "YouTube", "Steam"].map(
                    (platform) => (
                      <button
                        key={platform}
                        className="gaming-card px-4 py-2 rounded-lg hover:gaming-glow transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-red-400 font-semibold">
                          {platform}
                        </span>
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gaming-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              Напишите нам
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Тема
                </label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300">
                  <option>Общие вопросы</option>
                  <option>Сотрудничество</option>
                  <option>Техническая поддержка</option>
                  <option>Карьера</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                  placeholder="Расскажите о вашем проекте или вопросе..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full gaming-gradient py-3 px-6 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 gaming-glow"
              >
                Отправить Сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <div className="text-3xl font-black gaming-gradient bg-clip-text text-transparent mb-4">
            REDSHORD
          </div>
          <p className="text-gray-500">
            © 2024 REDSHORD Game Studio. Создаем игры будущего.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
